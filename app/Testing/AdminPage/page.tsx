
import AdminPage from "./AdminPageClient";
import { getRegistration } from "@/database/registration"

export default async function loadAdminPage(){
    const registrations = await getRegistration();

    return (
        <AdminPage registrationCards = {registrations} ></AdminPage>
    )

}