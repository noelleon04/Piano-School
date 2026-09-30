"use client";
import { Offering, signupProp } from "../CourseBooks/CourseBook.types"
import styles from "./signup.module.css"
import { daysOfWeek } from "../CourseBooks/CourseBook.types";
import { useState } from "react";

export default function Signup ({course, offering, selectedOffer}:signupProp){
    const dayOptions = [...new Set(offering.map((offer)=>{
        return offer.courseId = course.courseId ? offer.dayOfWeek : "Unavailable";
    }))]
    const [daySelected, setDay] = useState<daysOfWeek>(selectedOffer.dayOfWeek as daysOfWeek)

    const [offerOptions, setOffer] = useState<string|null>(selectedOffer.startTime)

    function changeDate(time:string){
        const [hour,minute] = time.split(":");
        const hourNumber = Number(hour);

        const hourPeriod = hourNumber >= 12 ? "PM" :"AM";
        let displayHour = hourNumber %12;

        if (displayHour === 0 ){
            displayHour = 12;
        }
        return `${displayHour}:${minute} ${hourPeriod}`;
    }

    return <main>
        <nav className = {styles.signUpNav}>
            <div>Logo</div>
        </nav>
        <div className = {styles.mainSignup}>
            <div className = {styles.signupBack}>
                <button className = {styles.signupBackButton}>Back to Courses</button>
            </div>
            <div className = {styles.signupContent}>
                <div className = {styles.signupDetails}>
                    <div className = {styles.courseCode}>{course.cover.subject}</div>
                    <h1 className = {styles.signupTitle}>{course.cover.courseTitle}</h1>
                    <p className = {styles.signupParagraph}>{course.courseDetail.description}</p>
                    <div className = {styles.doubleLine}>
                        <div>
                            <h3>Schedule</h3>
                            <p>{course.courseDetail.format}</p>
                        </div>
                        <div>
                            <h3>Pricing</h3>
                            <p>{course.courseDetail.pricing}</p>
                        </div>
                    </div>
                    <h2>About These Lessons</h2>
                    <p>{course.courseDetail.details}</p>
                    <p className ={styles.signupSmallText}>If you do not see your </p>
                </div>
                <div className = {styles.signupBookCard}>
                    <h3>LESSON SIGNUP</h3>
                    <h2>BOOK NOW</h2>
                    <p>Choose your day and time, then add your details.</p>
                    <div className = {styles.selectDiv}>
                        <p>Lesson day</p>
                        <select 
                        className = {styles.selectOption}
                        value = {daySelected}
                        onChange = {
                            (event)=>{
                                const day = event.target.value as daysOfWeek
                                setDay(day)
                            }
                        }
                        >
                            {dayOptions.map((day)=>{
                                return <option>{day}</option>
                            })}
                        </select>
                    </div>
                    <div className = {styles.signupTimes}>
                        <h3>Start time</h3>
                        <div className = {styles.timeContainer}>
                            {offering.map((offer)=>{
                                let isSelected = offerOptions === offer.startTime;
                                if(offer.dayOfWeek == daySelected){
                                    return <label>
                                        <input type="radio" name = "signupTime" value = {offer.startTime} checked = {isSelected} onChange={(event)=>{
                                            let offerTime = event.target.value;
                                            setOffer(offerTime);
                                        }}></input>
                                        <span>{changeDate(offer.startTime)}</span>
                                    </label>
                                }
                            })}
                        </div>
                    </div>
                    <div className = {styles.studentDetails}>
                        <h3>Your Details</h3>
                        <label className = {styles.field} htmlFor="first-name">
                            First name
                            <input id = "first-name" className={styles.nameField} name="firstName" type = "text" required/>
                        </label>
                        <label className = {styles.field} htmlFor="last-name">
                            Last name
                            <input id = "last-name" className={styles.nameField} name="lastName" type = "text" required/>
                        </label>
                        <label className = {`${styles.student} ${styles.nameField}`} htmlFor="student-name">
                            Student name
                            <input id = "student-name" className={`${styles.nameField} ${styles.student}`} name="studentName" type = "text" required/>
                        </label>
                    </div>
                    <div className = {styles.reserveContainer}>
                        <button className={styles.reserveButton} onClick = {()=>{console.log(daySelected, " " , offerOptions)}}>Reserve Now!</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

}


