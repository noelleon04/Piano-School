import "server-only"
import { database } from "./connection"

export async function getCourses(){
    const results =  await database.query("SELECT * FROM courses");
    return results.rows;
}