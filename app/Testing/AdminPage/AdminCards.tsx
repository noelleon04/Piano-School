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
                        <button className = {styles.confirmBtn}>Confirm</button>
                        <button className = {styles.rejectBtn}>Cancel</button>
                    </div>
                </div>
                <div className = {styles.requestedClass}>
                    <p className={styles.subtitle}>Requested Class</p>
                    <p>{registrationDate}</p>
                </div>
                <div className = {styles.contactInfo}>
                    <p className={styles.subtitle}> Parent/Gaurdian Contact</p>
                    <div className = {styles.nameDiv}>
                        <p>{contactFirstName}</p>
                        <p>{contactLastName}</p>
                    </div>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            </div>
        )
}