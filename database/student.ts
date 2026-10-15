import "server-only"
import { PoolClient } from "pg";

export async function addStudent(client:PoolClient, customerId: number, studentFirstName:string, studentLastName:string){
    const result = await client.query(
         `INSERT INTO student (customer_id, student_first_name, student_last_name )
          VALUES ($1, $2, $3)
          RETURNING student_id;`,
          [customerId,studentFirstName, studentLastName]
    )

    const studentId = result.rows[0].student_id;
    return studentId;
}