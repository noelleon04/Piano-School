"use client"

import styles from "./AdminPage.module.css"
import AdminCards from "./AdminCards"
import AdminBar from "./navbar"

import { allRegistrationProp } from "./admin.types"

export default function AdminPage( {registrationCards}: allRegistrationProp ) {
    return(
    <div>
        <AdminBar></AdminBar>
        <div className = {styles.registrationSection}>
            <h1>Registrations to review</h1>
            <div className = {styles.cardDiv}>
                {registrationCards.map((cards)=>{
                    return(
                        <AdminCards     
                            courseName = {cards.courseName}
                            subject = {cards.subject}
                            registrationDate = {cards.registrationDate}
                            studentName = {cards.studentName}
                            contactFirstName = {cards.contactFirstName}
                            contactLastName = {cards.contactLastName}
                            email = {cards.email}
                            phone = {cards.phone}></AdminCards>  
                        )
                    })}
            </div>
        </div>
       

    </div>
    )
}
