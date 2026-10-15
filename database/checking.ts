import "server-only"
import { Client, PoolClient } from "pg";

type ExistingRegistration = {
    registration_id: number;
    offering_id: number;
    parent_first_name: string;
    parent_last_name: string;
    email: string;
    telephone: string;
    student_first_name: string;
    student_last_name: string;
};

export async function checkOfferingAvailability(client: PoolClient, offeringId : number){
    const result = await client.query(
        `SELECT o.capacity > 
            (SELECT COUNT (*) AS occupied_seats
	            FROM registration AS r
	            WHERE r.offering_id = o.offering_id
		            AND r.status IN('pending', 'confirmed')
	        ) As Availability
        fROM offering AS o
        WHERE offering_id = $1; `, [Number(offeringId)])
   const Availability = result.rows[0].availability;

   return Availability;
}

export async function findUniqueId(client:PoolClient,uniqueId: string) : Promise<ExistingRegistration |null>{
    const result = await client.query<ExistingRegistration>(
          `SELECT r.registration_id, c.parent_first_name, c.parent_last_name, c.email, c.telephone, s.student_first_name, s.student_last_name, r.offering_id
          FROM registration AS r
          JOIN student AS s
            ON r.student_id = s.student_id
        JOIN customer AS c
            on s.customer_id = c.customer_id
          WHERE submission_id = $1;   `, [uniqueId])

    return result.rows[0]?? null;
}