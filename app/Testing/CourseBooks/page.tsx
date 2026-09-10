"use client";

import { useState } from "react";
import CourseBook from "./CourseBook";
import OpenBook from "./openBook";
import { courseContent } from "./courseBookData";
import type { CourseId } from "./CourseBook.types";
import styles from "./CourseBook.module.css";

const courseIds = Object.keys(courseContent) as CourseId[];

export default function CourseBooksPage() {
  const [idSelected, setId] = useState<CourseId>("English");
  const [isOpen, setOpen] = useState(false);
  const selectedBook = courseContent[idSelected];

  return (
    <main>
      <OpenBook
        courseId={idSelected}
        courseDetails={selectedBook.courseDetail}
        isOpen={isOpen}
        onclick={() => setOpen(false)}
      />
      <div className={styles.bookWrapper}>
        {courseIds.map((courseId) => {
          const course = courseContent[courseId];
          return (
            <CourseBook
              key={courseId}
              courseId={courseId}
              cover={course.cover}
              onclick={() => {
                setId(courseId);
                setOpen(true);
              }}
            />
          );
        })}
      </div>
    </main>
  );
}
