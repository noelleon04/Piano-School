import type { openBookProp } from "./CourseBook.types";
import styles from "./CourseBook.module.css";
import { Inter } from "next/font/google";
import { daysOfWeek, Offering } from "./CourseBook.types";
import { useState } from "react";


const bookFont = Inter({
  subsets: ["latin"],
  weight: "variable",
});


export default function OpenBook({
  courseId,
  courseDetails,
  isOpen,
  OfferingArray,
  onclick,
}: openBookProp) {
  const [daySelected, setDay] = useState<daysOfWeek>("Start")
  const dayOptions = [...new Set (OfferingArray.map((offering)=>{
    return offering.courseId == courseId ? offering.dayOfWeek : "Unavailable"
  }))]
  const [offeringSelected,setOffering] = useState<number |null>(null)
  
  return (
    <div
      className={styles.openBookContainer}
      style={{
        zIndex: isOpen ? 99 : -1,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className={`${styles.openBook} ${bookFont.className}`}>
        <div className = {styles.leftPage}>
          <p className = {styles.bookDescription}>{courseDetails.description}</p>
          <h2 className = {styles.bookTitle}>{courseId}</h2>
          <p className = {styles.introParagraph}>{courseDetails.details}</p>
          <div className={styles.line}></div>
          <div>
            <h2 className={styles.schedule}>Schedule</h2>
            <p className={styles.introParagraph}>{courseDetails.format}</p>
          </div>
          <div>
            <h2 className={styles.schedule}>Pricing</h2>
            <p className={styles.introParagraph}>{courseDetails.pricing}</p>
          </div>
        </div>
        <div className = {styles.rightPage}>
          <h2 className = {styles.bookTitle}>Book Now</h2>
          <p>{courseDetails.description}</p>
          <p className = {styles.schedule}>Available times</p>
          <select 
            value = {daySelected}
          onChange = {(event) => {
              const day = event.target.value as daysOfWeek;
              setDay (day)
            }}>
              <option>Select a day</option>
              {dayOptions.map((day)=>{
                return (
                  <option>{day}</option>
                )
              })}
          </select>
          <div className = {styles.offeringContainer}>

            {OfferingArray.map((offering)=>{
              if(offering.dayOfWeek == daySelected && offering.courseId == courseId){
                return(
                  <label key = {offering.offeringId}>
                    <input 
                      type="radio" 
                      name="lessonTime"
                      value = {offering.offeringId}
                      checked ={ offeringSelected == offering.offeringId}
                      onChange = {()=>{setOffering(offering.offeringId)}}/>
                      <span>{offering.startTime}</span>            
                  </label>
                )
              }
          })}
          </div>
          <div className = {styles.bookNow}>
            <button className = {styles.signupButton}>Book Now</button></div>
        </div>
        <button
          type="button"
          className={styles.backButton}
          onClick = { ()=> {onclick(); setDay("Start")}}
          aria-label="Close course details"
        >
          X
        </button>
      </div>
    </div>
  );
}
