import "server-only"
import { database } from "./connection"
import { ColourTheme, Course } from "@/app/Testing/CourseBooks/CourseBook.types";



import type { QueryResultRow } from "pg";  

interface CourseRow extends QueryResultRow{
  id: number;
  course_id: string;
  course_title: string;
  symbol: string;
  subject: string;
  theme: ColourTheme;
  details: string;
  format_summary: string;
  description: string;
  pricing_summary: string;
  dispaly_order:number;
}

export async function getCourses() : Promise<Course[]>{
    const results =  await database.query<CourseRow>("SELECT * FROM courses");
    const content = results.rows;

    const transformedCourses = content.map((course)=>{
        return {
            courseId: course.course_id,
            cover: {
                courseTitle: course.course_title,
                symbol: course.symbol,
                subject:course.subject,
                theme: course.theme,
            },
            courseDetail:{
                details: course.details,
                format: course.format_summary,
                description: course.description,
                pricing: course.pricing_summary,
            }
        }
    })

    return transformedCourses;
}

