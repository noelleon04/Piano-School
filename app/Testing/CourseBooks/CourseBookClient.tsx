"use client"


import { useState } from "react";
import CourseBook from "./CourseBook";
import OpenBook from "./openBook";
import type { CourseId } from "./CourseBook.types";
import styles from "./CourseBook.module.css";
import { CourseProp } from "./CourseBook.types";
import { Offering } from "./CourseBook.types";


export default function CourseBooksPage({Courses, Offerings}:CourseProp) {
  const [idSelected, setId] = useState<CourseId>("English");
  const [isOpen, setOpen] = useState(false);
  const selectedBook = Courses.find((course) =>{
    return course.courseId === idSelected;
  })
  if(!selectedBook){
    return <p>Course not Found.</p>
  }else{
 return (
    <main>
      <OpenBook
        courseId={idSelected}
        courseDetails={selectedBook.courseDetail}
        isOpen={isOpen}
        OfferingArray={Offerings}
        onclick={() => setOpen(false)}
      />
      <div className={styles.bookWrapper}>
        {Courses.map((courses) => {
          const courseId = courses.courseId;
          return (
            <CourseBook
              key={courseId}
              courseId={courseId}
              cover={courses.cover}
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
}
