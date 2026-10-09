import "server-only"
import { database } from "./connection";


export async function addRegistration(studentId :Number, offeringId:Number, uniqueId: string ){
    await database.query(  `
        INSERT INTO registration (student_id, offering_Id, status , submission_id )
        VALUES($1, $2, $3 , $4)
        RETURNING registration_id`,[studentId, offeringId, "pending", uniqueId]
    );
}