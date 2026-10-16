import { checkOfferingAvailability } from "@/database/checking";
import { addCustomer } from "@/database/customer";
import { addStudent } from "@/database/student";
import { addRegistration } from "@/database/registration";
import { findUniqueId } from "@/database/checking";
import { database } from "@/database/connection";
import { lockUniqueId } from "@/database/checking";


export async function POST(request: Request) {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const telephone = formData.get("phone");
    const studentFirstName = formData.get("studentFirstName");
    const studentLastName = formData.get("studentLastName");
    const offeringId = formData.get("offeringId");
    const uniqueId = formData.get("submissionId");




    if (typeof firstName !== "string" || firstName.trim() === "" || firstName.trim().length > 100) {
        return Response.json(
            { message: "Enter a parent first name between 1 and 100 characters long." },
            { status: 400 }
        );
    }

    if (typeof lastName !== "string" || lastName.trim() === "" || lastName.trim().length > 100) {
        return Response.json(
            { message: "Enter a parent last name between 1 and 100 characters long." },
            { status: 400 }
        );
    }

    // This checks the email's basic format, not whether the mailbox exists.
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return Response.json(
            { message: "Enter a valid email address." },
            { status: 400 }
        );
    }

    if(typeof telephone !== "string"|| telephone.trim() === ""|| telephone.trim().length > 100){
        return Response.json(
            {message: "Enter a valid telephone."},
            {status:400}
        )
    }

    if (typeof studentFirstName !== "string" || studentFirstName.trim() === "" || studentFirstName.trim().length > 100) {
        return Response.json(
            { message: "Enter a student first name between 1 and 100 characters long." },
            { status: 400 }
        );
    }

    if (typeof studentLastName !== "string" || studentLastName.trim() === "" || studentLastName.trim().length > 100) {
        return Response.json(
            { message: "Enter a student last name between 1 and 100 characters long." },
            { status: 400 }
        );
    }

    if(!offeringId){
        return Response.json(
        {message:"Unfortuantely this time has already been booked. Please select a new time or contact the customer support"},
        {status: 400}
        )
    }

    const offeringAsNumber = Number(offeringId);

    if(!Number.isInteger(offeringAsNumber)){
        return Response.json(
            {message: "Invalid offering ID."},
            {status :400}
        )
    }

        if(typeof uniqueId !== "string"){
        return Response.json(
            {message: "missing or invalid submission ID."},
            {status: 400}
        )
    }
    
    const client = await database.connect();

    try{

        await client.query("BEGIN")

        const lockedOffering = await lockUniqueId(client, offeringAsNumber);

        if(lockedOffering == null){
            await client.query("ROLLBACK");
            return Response.json(
                    {message: "You selected a time slot that was not valid , please try again "},
                    {status: 400}
            )

        }

        const isFound = await findUniqueId(client,uniqueId);
            if(isFound == null){
                const isAvailable = await checkOfferingAvailability(client,offeringAsNumber);

                if(!isAvailable){
                    await client.query("ROLLBACK");
                    return Response.json(
                        {message: "Sorry, this timeslot has already been booked, please choose another option or contact customer support"},
                        {status: 400}
                    )
                }
            


            const customerId = await addCustomer(client,firstName,lastName,email,telephone);
            const studentId = await addStudent(client,customerId,studentFirstName, studentLastName );
            await addRegistration(client, studentId,Number(offeringId), uniqueId);

            await client.query("COMMIT");

  
        }else{
            const detailsMatch =
            isFound.parent_first_name === firstName &&
            isFound.parent_last_name === lastName &&
            isFound.email === email &&
            isFound.telephone === telephone &&
            isFound.student_first_name === studentFirstName &&
            isFound.student_last_name === studentLastName &&
            isFound.offering_id === offeringAsNumber;

            if(detailsMatch){
                await client.query("ROLLBACK");
                return Response.json(
                    {message: "Your registration request has already been received."},
                );
            }
            await client.query("ROLLBACK");
            return Response.json(
                {
                    message: "This submission ID was already used with different details."
                },{ status: 409 });
        }

        }catch(error){
            await client.query("ROLLBACK");
            return Response.json(
                {message: "Sorry, something went wrong with adding you to the system, please contact customer support"},
                {status: 400}
            )
        }finally{
            client.release();
        }

        
    
    return Response.json({ message: "Validation passed. Your Registration has been saved" });
}
