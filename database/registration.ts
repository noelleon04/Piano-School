import "server-only"
import { database } from "./connection";
import { PoolClient } from "pg";


export async function addRegistration(client: PoolClient, studentId :Number, offeringId:Number, uniqueId: string ){
    await client.query(  `
        INSERT INTO registration (student_id, offering_Id, status , submission_id )
        VALUES($1, $2, $3 , $4)
        RETURNING registration_id`,[studentId, offeringId, "pending", uniqueId]
    );
}