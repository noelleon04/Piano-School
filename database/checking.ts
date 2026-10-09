import "server-only"
import { database } from "./connection"

export async function checkOfferingAvailability(offeringId : Number){
    const result = await database.query(
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

export async function checkUniqueId(uniqueId: string){
    const result = await database.query(
         `SELECT count(*) > 0 As found
         FROM registration
         WHERE submission_id = $1; `,[uniqueId])
    const idFound = result.rows[0].found;
    return idFound;
}