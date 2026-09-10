import type { openBookProp } from "./CourseBook.types";
import styles from "./CourseBook.module.css";

export default function OpenBook({
  courseId,
  courseDetails,
  isOpen,
  onclick,
}: openBookProp) {
  return (
    <div
      className={styles.openBookContainer}
      style={{
        zIndex: isOpen ? 99 : -1,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className={styles.openBook}>
        <h2>{courseId}</h2>
        <p>{courseDetails.details}</p>
        <button
          type="button"
          className={styles.backButton}
          onClick={onclick}
          aria-label="Close course details"
        >
          X
        </button>
      </div>
    </div>
  );
}
