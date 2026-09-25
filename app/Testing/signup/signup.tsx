import styles from "./signup.module.css"

export default function Signup (){
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
                    <div className = {styles.courseCode}>Music - Piano Course</div>
                    <h1 className = {styles.signupTitle}> Full Piano Lessons</h1>
                    <p className = {styles.signupParagraph}>individual piano instruction for students interested in developing their musical skills</p>
                    <div className = {styles.doubleLine}>
                        <div>
                            <h3>Schedule</h3>
                            <p>Weekly 30 min one to one lessons</p>
                        </div>
                        <div>
                            <h3>Pricing</h3>
                            <p>$25.00 per 30-minute lesson</p>
                        </div>
                    </div>
                    <h2>About These Lessons</h2>
                    <p> Lesons include technique, repetoire work, and optional examination preperation</p>
                    <p className ={styles.signupSmallText}>Sample course content from the existing project. Schedule, pricing, and course details are for this design preview and remain to be confirmed.</p>
                </div>
                <div className = {styles.signupBookCard}>
                    <h3>LESSON SIGNUP</h3>
                    <h2>BOOK NOW</h2>
                    <p>Choose your day and time, then add your details.</p>
                    <div className = {styles.selectDiv}>
                        <p>Lesson day</p>
                        <select name="" id="">
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                    </div>
                    <div className = {styles.signupTimes}>
                        <h3>Start time</h3>
                        <div className = {styles.timeContainer}>
                            <label>
                                <input type="radio" name ="signupTime" value = "9AM"/>
                                <span>9:00AM</span>
                            </label>
                            <label>
                                <input type="radio" name ="signupTime" value = "930AM"/>
                                <span>9:30AM</span>
                            </label>
                            <label>
                                <input type="radio" name ="signupTime" value = "10AM"/>
                                <span>10:00AM</span>
                            </label>
                            <label>
                                <input type="radio" name ="signupTime" value = "1030AM"/>
                                <span>10:30AM</span>
                            </label>
                            <label>
                                <input type="radio" name ="signupTime" value = "11AM"/>
                                <span>11:00AM</span>
                            </label>
                            <label>
                                <input type="radio" name ="signupTime" value = "1130AM"/>
                                <span>11:30AM</span>
                            </label>
                        </div>
                    </div>
                    <div className = {styles.studentDetails}>
                        <label className = {styles.field} htmlFor="first-name">
                            First name
                            <input id = "first-name" className={styles.nameField} name="firstName" type = "text" required/>
                        </label>
                        <label className = {styles.field} htmlFor="last-name">
                            Last name
                            <input id = "last-name" className={styles.nameField} name="lastName" type = "text" required/>
                        </label>
                        <label className = {styles.field} htmlFor="student-name">
                            Student name
                            <input id = "student-name" className={styles.nameField} name="studentName" type = "text" required/>
                        </label>
                    </div>
                    <div className = {styles.reserveContainer}>
                        <button className={styles.reseveButton}>Reserve Now!</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

}


