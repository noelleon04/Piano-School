import "server-only"
import { PoolClient } from "pg";


export async function addRegistration(client: PoolClient, studentId :number, offeringId:number, uniqueId: string ){
    const result = await client.query(  `
        INSERT INTO registration (student_id, offering_Id, status , submission_id )
        VALUES($1, $2, $3 , $4)
        RETURNING registration_id`,[studentId, offeringId, "pending", uniqueId]
    );

    return result.rows[0].registration_id;
}
