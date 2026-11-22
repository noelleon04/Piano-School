"use client";
import Link from "next/link";
import styles from "./confirmation.module.css";

export default function ConfirmationPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <section className={styles.introduction} aria-labelledby="confirmation-title">
          <h1 id="confirmation-title">A little closer to your first lesson.</h1>
          <p>Thank you for taking the next step. Your registration request has been received.</p>
          <div className={styles.note}>
            <h2>What happens next?</h2>
            <p>Submitting a registration request does not confirm a place in the class.</p>
          </div>
        </section>

        <section className={styles.card} aria-labelledby="receipt-title">
          <p className={styles.cardLabel}>Registration request</p>
          <div className={styles.receiptHeading}>
            <div className={styles.check} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="m8 16 5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="receipt-title">Request received.</h2>
          </div>
          <p className={styles.description}>Thank you for your interest in joining a class.</p>
          <div className={styles.status}>
            <span>Submitted requests are reviewed before a place is confirmed.</span>
          </div>
          <p className={styles.explanation}>This acknowledges your request. Class confirmation is a separate step.</p>
          <Link className={styles.button} href="/Testing/CourseBooks" onClick={()=>{
            sessionStorage.removeItem("pianoSignupId");
          }}>Back to Courses</Link>
        </section>
      </div>
    </main>
  );
}
