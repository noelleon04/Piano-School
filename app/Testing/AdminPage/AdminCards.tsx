"use client"

import styles from "./AdminPage.module.css"

type AdminCardProps = {
    courseName: string;
    registrationDate: string;
    studentName: string;
    contactFirstName: string;
    contactLastName: string;
    email: string;
    phone: string;
}
export default function adminCards(    {
    courseName,
    registrationDate,
    studentName,
    contactFirstName,
    contactLastName,
    email,
    phone} : AdminCardProps){
        return(
            <div className = {styles.cardContainer}>
                <div className = {styles.studentInfo}>
                    <div className ={styles.studentDiv}>
                        <p className = {styles.studentTitle}>STUDENT</p>
                        <h2 className = {styles.adminCardTitle} >{studentName}</h2>
                        <p className ={styles.courseName}>{courseName}</p>
                    </div>
                    <div className = {styles.buttonDiv}>
                        <button>Confirm</button>
                        <button>Reject</button>
                    </div>
                </div>
                <div className = {styles.requestedClass}>
                    <p>{registrationDate}</p>
                </div>
                <div className = {styles.contactInfo}>
                    <p>{contactFirstName}</p>
                    <p>{contactLastName}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </div>
        )
}