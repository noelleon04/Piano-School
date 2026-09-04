"use client"
import styles from "./page.module.css";
import { useState } from "react";

const pianoKeys = {
    F: {
        value: "hello",
        description: "This is the F Key"
    },

    G: {
        value: "YOYO",
        description: "This is the G Key"
    },

    A:{
        value:"HI",
        description:"This is the A Key"
    },
    B:{
        value:"NI HAO",
        description: "This is the B Key"
    }
}

const blackKeys = ["fSharp", "gSharp", "aSharp"];

type pianoNotes = keyof typeof pianoKeys;
const whiteKeys = Object.keys(pianoKeys) as pianoNotes[];



export default function PianoExplorer(){
    const [pianoState, setPianoState] = useState<pianoNotes>("F");
    const selectedKey = pianoKeys[pianoState];

    return( 

        <div className = {styles.pianoKeys}>
            <div className = {styles.pianoStage}>
                <div className = {styles.pianoContainer}>
                    <p className = {styles.pianoHeader}>This is a test</p>
                    <div className = {styles.keyField}>
                        {whiteKeys.map((note)=>{
                            const isSelected = pianoState === note;
                            return <button className = {`${styles.keys} ${isSelected ? styles.changeKey :""}`}
                            onClick = {()=> setPianoState(note)}
                            key = {note}
                            ><span className={styles.keyLabel}>{note}</span>
                            </button>
                        })}
                        {blackKeys.map((blackKey) =>{
                            return <div className = {`${styles.blackKeys} ${styles[blackKey]}`}></div>
                        })}
                    </div>
                </div>
            </div>
            <article className = {styles.detailPanel}>
                <div className = {styles.detailMeta}>
                    <div className = {styles.detailNote}>{pianoState}</div>
                    <span className={styles.detailKicker}>Selected key</span>
                </div>
                <h3>{selectedKey.value}</h3>
                <p className={styles.detailCopy}>{selectedKey.description}</p>
                <p className={styles.detailStatus}>
                    Proposal details still in development
                </p>
            </article>
        </div>
    )
}