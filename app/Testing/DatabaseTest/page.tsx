import { getCourses } from "@/database/courses";

export default async function DatabaseTestPage() {
    const courses = await getCourses();

    console.log(courses);

    const courseId = courses.map((courses)=>{ 
        return courses.course_id;
    })

    return (
        <div>
            <h1>All course</h1>
            <ul>
                {courseId.map((courseId)=>{
                    return (
                    <li>{courseId}</li>
                )
                })}
            </ul>
        </div>
        
    )
}