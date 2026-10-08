import "server-only"
import { database } from "./connection"

export async function addCustomer(custFirstName:string, custLastName:string, custEmail:string, custTelephone :string){
    const result = await database.query(
        `INSERT INTO customer(parent_first_name, parent_last_name, email, telephone)
        VALUES ($1,$2,$3,$4)
        RETURNING customer_id;
        `, [custFirstName, custLastName, custEmail, custTelephone]
    )
    //remember, the database.query usually always gives you a [] so you have to go through the array to find the inforamtion you want. 
    const customerId = result.rows[0].customer_id;
    return customerId;
}

