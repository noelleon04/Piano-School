import "server-only"
import { database } from "./connection";
import { Offering } from "@/app/Testing/CourseBooks/CourseBook.types";

import { QueryResultRow } from "pg";

interface OfferingRow extends QueryResultRow{
    offering_id: number;
    day_of_week: string;
    start_time: string;
    end_time: string;
    course_id: string;
    is_visible: boolean;
    is_open_for_registration: boolean;
    capacity: number;
}

export async function getOffering() :  Promise<Offering[]>{
    const results = await database.query<OfferingRow>(
        `SELECT offering_id, day_of_week, start_time,end_time, c.course_id, is_visible, is_open_for_registration, capacity
        FROM offering AS o
        JOIN courses AS c
            ON o.course_id = c.id
        JOIN timeslot AS t
            ON o.timeslot_id = t.timeslot_id;`)
    
    const offeringResults = results.rows;

    const transformedCourses = offeringResults.map((offering)=>{
        return{
              offeringId: offering.offering_id,
              dayOfWeek: offering.day_of_week,
              startTime: offering.start_time,
              endTime: offering.end_time,
              courseId: offering.course_id,
              isVisible: offering.is_visible,
              isOpen: offering.is_open_for_registration,
              capacity: offering.capacity,
        }
    })

    return transformedCourses;
}