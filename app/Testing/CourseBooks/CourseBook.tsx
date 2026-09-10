"use client"

import type { CoverProp } from "./CourseBook.types";
import styles from "./CourseBook.module.css";
import { Inter } from "next/font/google";

const bookFont = Inter({
  subsets: ["latin"],
  weight: "variable",
});

export default function CourseBook({
  courseId,
  cover,
  onclick,
} : CoverProp){
  return(
    <button data-course-id = {courseId}
            data-theme = {cover.theme}
            type = "button"
            className = {`${styles.bookButton} ${bookFont.className} `}
            onClick={onclick}
      >
        <span className= {styles.book} >
          <span className = {styles.cover}>
            <span className = {styles.label}>{cover.subject}</span>
            <span className = {styles.title}>{cover.courseTitle}</span>
            <span className = {styles.symbol}>{cover.symbol}</span>
            <span className = {`${styles.description} ${bookFont.className}`}>view more details</span>
          </span>
        </span>
    </button>
  )
}
