import { checkOfferingAvailability } from "@/database/checking";
import { addCustomer } from "@/database/customer";
import { addStudent } from "@/database/student";
import { addRegistration } from "@/database/registration";
import { checkUniqueId } from "@/database/checking";

export async function POST(request: Request) {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const telephone = formData.get("phone");
    const studentFirstName = formData.get("studentFirstName");
    const studentLastName = formData.get("studentLastName");
    const offeringId = formData.get("offeringId");
    const uniqueId = formData.get("submissionId")


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

    const isFound = await checkUniqueId(uniqueId);

    if(!isFound){
        const isAvailable = await checkOfferingAvailability(offeringAsNumber);

        if(!isAvailable){
        return Response.json(
            {message: "Sorry, this timeslot has already been booked, please choose another option or contact customer support"},
            {status: 400}
        )
        }
        try{
            const customerId = await addCustomer(firstName,lastName,email,telephone);
            const studentId = await addStudent(customerId,studentFirstName, studentLastName );
            await addRegistration(studentId,Number(offeringId), uniqueId);
        }
        catch (error){
            return Response.json(
                {message: "Sorry, something went wrong with adding you to the system, please contact customer support"},
                {status: 400}
            )
        }
    }else{
        
    }

    



    

 
    return Response.json({ message: "Validation passed. Your Registration has been saved" });
}
