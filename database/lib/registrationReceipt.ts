import "server-only";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

type Registration = {
  registrationComplete: boolean;
}

export async function getRegistrationSession(){
 const sessionSecret = process.env.REGISTRATION_RECEIPT_SECRET;
 
 if (!sessionSecret || sessionSecret.length < 32) {
  throw new Error(
    "The server session secret is missing or too short."
  );
}

return getIronSession<Registration>(
  await cookies(),
  {
    password: sessionSecret,
    cookieName:"class_registration",
    ttl: 5* 60,
    cookieOptions: {
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    }

  }
)
}


