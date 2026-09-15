import { getCourses } from "@/database/courses";
import CourseBooksPage from "./CourseBookClient";


export default async function loadCourseBook(){
  const courses = await getCourses();
  return <CourseBooksPage Courses= {courses}></CourseBooksPage>
}
   