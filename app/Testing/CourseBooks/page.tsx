import CourseBook from "./CourseBook";
import { courseContent } from "./courseBookData";
import styles from "./CourseBook.module.css"

type CourseId = keyof typeof courseContent;

const courseIds = Object.keys(courseContent) as CourseId[]

export default function CourseBooksPage() {
  return (
    <main>
      <div className = {styles.openBookContainer}>
        <div className = {styles.openBook}>
          <span ></span>
        </div>
      </div>
      <div className = {styles.bookWrapper} >
        {courseIds.map((courseId) =>{
          const course = courseContent[courseId];
          return(
            <CourseBook key= {courseId} courseId = {courseId} cover = {course.cover}></CourseBook>
          )
        })}
      </div>
      </main>
    )}