
"use client";

import { useState } from 'react';
import styles from './PianoExplorer.module.css';


const blackKeys = ["fSharp","gSharp" ,"aSharp"] as const;
const pianoContent = {
    F:{
        title:"Music discovery",
        description: "explore our beginner music adventure designed for day care students"
    },

    G:{
        title:"Piano Lessons",
        description: "learn about our excellent piano teachers"

    },

    A: {
        title:"Daycare Fit",
        description: "Program details still needs to be confirmed"
    },

    B:{
        title: "Program status",
        description: "This piano enrichment concept is still in development"
    }
} as const;

type PianoNote = keyof typeof pianoContent;
const notes = Object.keys(pianoContent) as PianoNote[];


export default function PianoExplorer (){
    const [selectedKey, setSelectedKey] = useState<PianoNote>("F");
    const selectedContent = pianoContent[selectedKey];
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
                        <button onClick ={(event)=>setSelectedKey(note)}
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
            <article className = {styles.detailPanel}>
                <span className = {styles.detailNote}>
                    {selectedKey}
                </span>
                <h3>{selectedContent.title}</h3>
                <p>{selectedContent.description}</p>
            </article>
        </div>
    );
}       