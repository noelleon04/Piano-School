"use client"

import styles from "./AdminPage.module.css"

export default function AdminBar (){
    return(
        <div className = {styles.navBar}>
            <h1>PianoSchool</h1>
            <p>Registration</p>
            <p>Confirmed Classes</p>
            <p>Students</p>
        </div>
    )
}