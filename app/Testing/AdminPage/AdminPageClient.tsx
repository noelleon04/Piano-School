"use client"

import { useState } from "react"
import AdminCards from "./AdminCards"

import { allRegistrationProp } from "./admin.types"

export default function AdminPage( {registrationCards}: allRegistrationProp ) {
    return(
    <div>
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
    )
}
