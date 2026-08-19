import styles from "./page.module.css";

const programCards = [
  {
    number: "01",
    title: "Music discovery",
    description:
      "Beginner piano activities are part of the proposal. The exact repertoire and lesson format remain to be confirmed.",
  },
  {
    number: "02",
    title: "Creative play",
    description:
      "The concept explores how first musical steps could feel playful in a daycare setting. No final activity plan is confirmed.",
  },
  {
    number: "03",
    title: "Daycare fit",
    description:
      "Timing, group size, staffing, classroom setup, and any enrolment process are all still to be confirmed.",
  },
];

const processSteps = [
  {
    title: "Shape the concept",
    description:
      "Explore suitable ages, the learning environment, and the goals a daycare may want the program to support.",
  },
  {
    title: "Plan together",
    description:
      "Consider a practical format around space, scheduling, group size, equipment, and staffing.",
  },
  {
    title: "Confirm the details",
    description:
      "Confirm what information and approvals would be needed before any program could be offered to families.",
  },
];

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className={styles.brandMark}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M29 8c-8 2-12 8-9 14 3 5 11 3 13 9 2 7-4 11-12 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16 16c8-3 17 1 18 8M12 24c7-3 17 0 20 7M13 32c7-2 13 0 16 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".55"
      />
      <path d="m28 36 9 5-11 3 2-8Z" fill="var(--coral)" />
    </svg>
  );
}

function PianoArtwork() {
  return (
    <svg
      aria-hidden="true"
      className={styles.artwork}
      viewBox="0 0 520 520"
      fill="none"
    >
      <rect width="520" height="520" rx="54" fill="#FFF8EA" />
      <circle cx="131" cy="128" r="74" fill="#42B5AA" />
      <circle cx="345" cy="191" r="38" fill="#FA5743" />
      <path d="M181 29h67v66a67 67 0 0 1-67-66Z" fill="#FFB62D" />
      <path d="m216 29 32 1-32 34V29Z" fill="#18324E" />
      <path d="M45 41c18-20 50-10 48 12-2 18-26 16-37 32-14 20-39-15-11-44Z" fill="#222A4B" />
      <path d="M387 37c0-15 24-15 24 0v17c30 8 31 48 6 59l-6 2v22c0 16-24 16-24 0V37Z" fill="#222A4B" />
      <circle cx="451" cy="94" r="10" fill="#F49C77" />
      <circle cx="108" cy="85" r="7" fill="#FFBC2F" />
      <circle cx="144" cy="99" r="7" fill="#FFBC2F" />
      <circle cx="162" cy="131" r="7" fill="#FFF3CC" />
      <circle cx="119" cy="148" r="7" fill="#FFBC2F" />
      <circle cx="82" cy="133" r="7" fill="#FFF3CC" />
      <circle cx="138" cy="166" r="7" fill="#FFF3CC" />
      <rect x="355" y="69" width="56" height="90" rx="5" transform="rotate(-7 355 69)" fill="#32AAA2" />
      <rect x="372" y="90" width="25" height="66" rx="4" transform="rotate(-2 372 90)" fill="#FA5743" />
      <rect x="420" y="29" width="58" height="24" rx="4" transform="rotate(28 420 29)" fill="#F6A27A" />
      <circle cx="474" cy="174" r="21" fill="#42B5AA" />
      <rect x="74" y="238" width="369" height="138" rx="12" fill="#FFFDF4" stroke="#F3CF65" strokeWidth="5" />
      <path d="M109 238v138M145 238v138M181 238v138M217 238v138M253 238v138M289 238v138M325 238v138M361 238v138M397 238v138" stroke="#7ACBC4" strokeWidth="3" />
      <path d="M132 238h24v72c0 10-5 15-12 15s-12-5-12-15v-72ZM204 238h24v72c0 10-5 15-12 15s-12-5-12-15v-72ZM276 238h24v72c0 10-5 15-12 15s-12-5-12-15v-72ZM348 238h24v72c0 10-5 15-12 15s-12-5-12-15v-72Z" fill="#222A4B" />
      <path d="m28 247 43-42 42 45-49 39-36-42Z" fill="#FFB62D" />
      <rect x="432" y="223" width="43" height="78" rx="18" transform="rotate(-48 432 223)" fill="#222A4B" />
      <rect x="24" y="324" width="43" height="77" rx="15" transform="rotate(-46 24 324)" fill="#222A4B" />
      <path d="M22 458c0-13 14-19 24-11l65 55H22v-44Z" fill="#FA5743" />
      <path d="m452 414 23 2-17 85-31-2 25-85ZM491 410h19v91h-35l16-91Z" fill="#FFB62D" />
      <rect x="155" y="420" width="177" height="23" rx="11.5" fill="#45B4AA" />
      <rect x="181" y="451" width="137" height="18" rx="9" fill="#F49C77" />
      <path d="M178 432h132" stroke="#FFF8EA" strokeWidth="5" strokeDasharray="5 8" />
      <circle cx="28" cy="182" r="15" fill="#F4A172" />
      <circle cx="298" cy="97" r="12" fill="#222A4B" />
      <circle cx="317" cy="132" r="11" fill="#FA5743" />
      <path d="m163 207 42-38 10 11-42 38-10-11ZM313 220c13 26 30 28 49 6" stroke="#F49C77" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page} id="top">

      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top" aria-label="Daycare Enrichment Concept home">
            <BrandMark />
            <span>
              Daycare enrichment
              <strong>concept</strong>
            </span>
          </a>

          <nav className={styles.navigation} aria-label="Primary navigation">
            <a className={styles.activeNav} href="#program">
              Program
            </a>
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
            <a href="#questions">Questions</a>
          </nav>

          <a className={styles.headerCta} href="#interest">
            View program status
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className={styles.hero} id="program" aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A playful first step into music.</p>
            <h1 id="hero-title">Piano enrichment at daycare.</h1>
            <p className={styles.heroIntro}>
              A proposed piano enrichment experience designed for the daycare setting.
              Program details are still being developed.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="#interest">
                View program status
                <span aria-hidden="true">→</span>
              </a>
              <a className={styles.textLink} href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          <div className={styles.artworkFrame}>
            <PianoArtwork />
            <span className={`${styles.spark} ${styles.sparkOne}`} aria-hidden="true" />
            <span className={`${styles.spark} ${styles.sparkTwo}`} aria-hidden="true" />
          </div>
        </section>

        <section className={styles.programSection} aria-labelledby="program-heading">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>The program concept</p>
            <h2 id="program-heading">Music, creativity, and a thoughtful daycare fit.</h2>
          </div>
          <div className={styles.cardGrid}>
            {programCards.map((card) => (
              <article className={styles.programCard} key={card.title}>
                <span className={styles.cardNumber} aria-hidden="true">
                  {card.number}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.processSection} id="how-it-works" aria-labelledby="process-heading">
          <div className={styles.processIntro}>
            <p className={styles.sectionLabel}>How it works</p>
            <h2 id="process-heading">Questions to resolve before a program is offered.</h2>
            <p>
              This first version is a proposal, not a published class schedule. These are
              suggested planning steps, and no registration process is currently confirmed.
            </p>
          </div>
          <ol className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.aboutSection} id="about" aria-labelledby="about-heading">
          <div className={styles.aboutNote} aria-hidden="true">
            <span>10</span>
            <small>years teaching piano</small>
          </div>
          <div className={styles.aboutCopy}>
            <p className={styles.sectionLabel}>About the concept</p>
            <h2 id="about-heading">Piano teaching experience, shaped for a new setting.</h2>
            <p>
              The concept is being developed by a piano teacher with 10 years of teaching
              experience. The next step is to translate that experience into a clear,
              thoughtfully designed program concept for the daycare environment.
            </p>
          </div>
        </section>

        <section className={styles.questionsSection} id="questions" aria-labelledby="questions-heading">
          <div className={styles.sectionHeading}>
            <p className={styles.sectionLabel}>Questions</p>
            <h2 id="questions-heading">What is confirmed so far?</h2>
          </div>
          <div className={styles.faqGrid}>
            <article>
              <h3>Is registration open?</h3>
              <p>No registration information is available yet. This page presents an early concept.</p>
            </article>
            <article>
              <h3>What ages and schedule?</h3>
              <p>Age groups, class times, and the final format still need to be confirmed.</p>
            </article>
            <article>
              <h3>How much will it cost?</h3>
              <p>No confirmed pricing is available. Any future rate would need to be shared before registration.</p>
            </article>
          </div>
        </section>

        <section className={styles.interestSection} id="interest" aria-labelledby="interest-heading">
          <div>
            <p className={styles.sectionLabel}>Program status</p>
            <h2 id="interest-heading">This piano enrichment concept is still in development.</h2>
          </div>
          <p>
            A contact method may be added after the program details and privacy process are
            confirmed. For now, this page is an honest preview of the idea in development.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top" aria-label="Back to the top">
          <BrandMark />
          <span>
            Daycare enrichment
            <strong>concept</strong>
          </span>
        </a>
        <p>Proposed piano enrichment program · Details in development</p>
      </footer>
    </div>
  );
}
