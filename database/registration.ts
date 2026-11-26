import "server-only"
import { PoolClient } from "pg";
import { database } from "./connection"
import type { AdminCardProps, registrationResult } from "@/app/Testing/AdminPage/admin.types";



export async function addRegistration(client: PoolClient, studentId :number, offeringId:number, uniqueId: string ){
    const result = await client.query(  `
        INSERT INTO registration (student_id, offering_Id, status , submission_id )
        VALUES($1, $2, $3 , $4)
        RETURNING registration_id`,[studentId, offeringId, "pending", uniqueId]
    );

    return result.rows[0].registration_id;
}

export async function getRegistration(): Promise<AdminCardProps[]> {
    const results = await database.query<registrationResult>(
        `SELECT s.student_first_name, s.student_last_name,
                c.course_title, c.subject, t.day_of_week, t.start_time,
                p.parent_first_name, p.parent_last_name, p.email, p.telephone
         FROM registration AS r
             JOIN offering AS o ON r.offering_id = o.offering_id
             JOIN timeslot AS t ON o.timeslot_id = t.timeslot_id
             JOIN student AS s ON r.student_id = s.student_id
             JOIN courses AS c ON c.id = o.course_id
             JOIN customer AS p ON p.customer_id = s.customer_id
         WHERE r.status = 'pending';`
    );

    const content = results.rows;

    const transformedRegistrations = content.map((registerInfo) => {
        return {
            courseName: registerInfo.course_title,
            subject: registerInfo.subject,
            registrationDate: `${registerInfo.day_of_week} ${registerInfo.start_time}`,
            studentName: `${registerInfo.student_first_name} ${registerInfo.student_last_name}`,
            contactFirstName: registerInfo.parent_first_name,
            contactLastName: registerInfo.parent_last_name,
            email: registerInfo.email,
            phone: registerInfo.telephone,
        };
    });

    return transformedRegistrations;
}
