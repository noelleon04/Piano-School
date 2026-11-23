"use client";

import Link from "next/link";
import styles from "./confirmation.module.css";

export default function BackToCoursesLink() {
  return (
    <Link
      className={styles.button}
      href="/Testing/CourseBooks"
      onClick={() => {
        sessionStorage.removeItem("pianoSignupId");
      }}
    >
      Back to Courses
    </Link>
  );
}