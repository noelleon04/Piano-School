import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

type RegistrationReceipt = {
  registrationId: number;
  expiresAt: number;
};



export function createRegistrationReceipt(registrationId:number): string {

const secret = process.env.REGISTRATION_RECEIPT_SECRET;

if(!secret){
    throw new Error("REGISTRATION_RECEIPT_SECRET is missing.");
}

if(!Number.isSafeInteger(registrationId) || registrationId<=0){
    throw new Error ("Invalid registration ID.");
}
const receipt: RegistrationReceipt = {
    registrationId,
    expiresAt: Date.now() + 30 * 60 * 1000,
  };

const payload = Buffer.from(
    JSON.stringify(receipt)
  ).toString("base64url");

 const signature = createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");

  return `${payload}.${signature}`;

}

export function verifyRegistrationReceipt(
  cookieValue: string | undefined
): RegistrationReceipt | null {
  // 1. Reject a missing or excessively large cookie.
  if (!cookieValue || cookieValue.length > 4096) {
    return null;
  }

  const secret = process.env.REGISTRATION_RECEIPT_SECRET;

  if (!secret) {
    throw new Error("REGISTRATION_RECEIPT_SECRET is missing.");
  }

  // 2. Separate the payload from the signature.
  const parts = cookieValue.split(".");

  if (parts.length !== 2) {
    return null;
  }

  const [payload, signature] = parts;

  if (
    !payload ||
    !signature ||
    !/^[A-Za-z0-9_-]+$/.test(payload) ||
    !/^[A-Za-z0-9_-]{43}$/.test(signature)
  ) {
    return null;
  }

  // 3. Calculate what the signature should be.
  const expectedSignature = createHmac("sha256", secret)
    .update(payload)
    .digest("base64url");

  const receivedBytes = Buffer.from(signature);
  const expectedBytes = Buffer.from(expectedSignature);

  if (
    receivedBytes.length !== expectedBytes.length ||
    !timingSafeEqual(receivedBytes, expectedBytes)
  ) {
    return null;
  }

  // 4. Decode and check the signed contents.
  try {
    const receipt: unknown = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    if (
      typeof receipt !== "object" ||
      receipt === null ||
      !("registrationId" in receipt) ||
      !("expiresAt" in receipt)
    ) {
      return null;
    }

    const { registrationId, expiresAt } = receipt;

    if (
      typeof registrationId !== "number" ||
      !Number.isSafeInteger(registrationId) ||
      registrationId <= 0 ||
      typeof expiresAt !== "number" ||
      !Number.isSafeInteger(expiresAt) ||
      expiresAt <= Date.now()
    ) {
      return null;
    }

    return { registrationId, expiresAt };
  } catch {
    // Invalid JSON is an invalid receipt.
    return null;
  }
}