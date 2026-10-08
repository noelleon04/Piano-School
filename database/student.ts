import "server-only"
import { database } from "./connection"

export async function addStudent(customerId: number, studentFirstName:string, studentLastName:string){
    const result = await database.query(
         `INSERT INTO student (customer_id, student_first_name, student_last_name )
          VALUES ($1, $2, $3)
          RETURNING student_id;`,
          [customerId,studentFirstName, studentLastName]
    )

    const studentId = result.rows[0].student_id;
    return studentId;
}