import { getCourses } from "@/database/courses";
import { getOffering } from "@/database/offering";

import CourseBooksPage from "./CourseBookClient";


export default async function loadCourseBook(){
  const courses = await getCourses();
  const offering = await getOffering();
  return <CourseBooksPage Courses= {courses} Offerings= {offering}></CourseBooksPage>
}
   