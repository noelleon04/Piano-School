import { getCourses } from "@/database/courses";

export default async function DatabaseTestPage() {
    const courses = await getCourses();

    console.log(courses);


    return (
        <div>
            <h1>All course</h1>
            <ul>
                {courses.map((courseId)=>{
                    return (
                    <li>{courseId.cover.courseTitle}</li>
                )
                })}
            </ul>
        </div>
        
    )
}