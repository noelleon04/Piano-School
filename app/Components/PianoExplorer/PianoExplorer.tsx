"use client";

import { useId, useState } from "react";
import styles from "./PianoExplorer.module.css";

const blackKeys = ["fSharp", "gSharp", "aSharp"] as const;

const pianoContent = {
  F: {
    title: "Music discovery",
    description:
      "Beginner piano activities are part of the proposal. The exact repertoire and lesson format remain to be confirmed.",
  },
  G: {
    title: "Creative play",
    description:
      "The concept explores how first musical steps could feel playful in a daycare setting. No final activity plan is confirmed.",
  },
  A: {
    title: "Daycare fit",
    description:
      "Timing, group size, staffing, classroom setup, and any enrolment process are all still to be confirmed.",
  },
  B: {
    title: "Program status",
    description:
      "This piano enrichment concept is still in development. Program details remain to be confirmed before anything is offered to families.",
  },
} as const;

type PianoNote = keyof typeof pianoContent;

const notes = Object.keys(pianoContent) as PianoNote[];

export default function PianoExplorer() {
  const detailId = useId();
  const [selectedKey, setSelectedKey] = useState<PianoNote>("F");
  const selectedContent = pianoContent[selectedKey];

  return (
    <section
      aria-label="Interactive program explorer"
      className={styles.pianoKeys}
    >
      <div className={styles.pianoStage}>
        <div className={styles.pianoContainer}>
          <p className={styles.pianoHeader}>
            Click the piano keys to learn more
          </p>

          <div
            aria-label="Program information keys"
            className={styles.keyField}
            role="group"
          >
            {notes.map((note) => {
              const content = pianoContent[note];
              const isSelected = selectedKey === note;

              return (
                <button
                  aria-controls={detailId}
                  aria-label={`Show ${content.title}`}
                  aria-pressed={isSelected}
                  className={`${styles.keys} ${isSelected ? styles.changeKey : ""}`}
                  key={note}
                  onClick={() => setSelectedKey(note)}
                  type="button"
                  value={note}
                >
                  <span className={styles.keyLabel}>{note}</span>
                </button>
              );
            })}

            {blackKeys.map((blackKey) => (
              <span
                aria-hidden="true"
                className={`${styles.blackKeys} ${styles[blackKey]}`}
                key={blackKey}
              />
            ))}
          </div>
        </div>

        <p className={styles.pianoCaption}>Interactive program explorer</p>
      </div>

      <article
        aria-atomic="true"
        aria-live="polite"
        className={styles.detailPanel}
        id={detailId}
      >
        <div className={styles.detailMeta}>
          <span className={styles.detailNote}>
            {selectedKey}
          </span>
          <span className={styles.detailKicker}>Selected key</span>
        </div>

        <h3>{selectedContent.title}</h3>
        <p className={styles.detailCopy}>{selectedContent.description}</p>
        <p className={styles.detailStatus}>
          Proposal details still in development
        </p>
      </article>
    </section>
  );
}
