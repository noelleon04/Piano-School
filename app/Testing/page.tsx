
"use client";

import styles from './page.module.css';
import { useState } from 'react';

const notes = ['F', 'G', 'A', 'B'];
const blackKeys = ["fSharp","gSharp" ,"aSharp"] as const;


export default function PianoKeys (){
    const [selectedKey, setSelectedKey] = useState("");
    return (
        <div className = {styles.pianoKeys}>
            <div className = {styles.pianoContainer}>
                <div className = {styles.pianoHeader}>
                    <span>Click the Piano Keys to Learn more</span>
                </div>
                <div className = {styles.keyField}>
                    {notes.map((note) =>{
                        const isSelected = selectedKey === note;
                    return (
                        <button onClick ={(event)=>isSelected ? setSelectedKey ("") : setSelectedKey(event.currentTarget.value)}
                        className = {`${styles.keys} ${isSelected ? styles.changeKey : ""}`} key = {note} value = {note} type = "button">
                            <span className = {styles.keyLabel}>{note}</span>
                        </button>
                    );
                })}
                {blackKeys.map((black) =>{
                    return(
                    <span className = {`${styles.blackKeys} ${styles[black]}`} key={black}></span>
                    )
                })}
                </div>
            </div>
        </div>
    );
}       