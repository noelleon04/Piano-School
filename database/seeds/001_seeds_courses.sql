BEGIN;

INSERT INTO courses (
    course_id,
    course_title,
    symbol,
    subject,
    theme,
    details,
    format_summary,
    description,
    pricing_summary,
    display_order
)
VALUES (
    'Piano',
    'Full Piano Lessons',
    '♪',
    'Music',
    'Green',
    'Individual piano instruction for students interested in developing their musical skills.',
    'Weekly 30-minute one-to-one lessons.',
    'Lessons include technique, repertoire work, and optional examination preparation.',
    '$25.00 per 30-minute lesson.',
    1
),
(
    'French',
    'French',
    'Fr',
    'Language',
    'Red',
    'A beginner-friendly introduction to French language skills.',
    'Weekly one-hour classes on Saturdays.',
    'Lessons include foundational French work.',
    '$30.00 per one-hour lesson.',
    2
),
(
    'Math',
    'Math',
    '+=',
    'Mathematics',
    'Yellow',
    'A supportive program for exploring foundational mathematics skills.',
    'Weekly one-hour classes on Saturdays.',
    'Lessons include foundational math work.',
    '$30.00 per one-hour lesson.',
    3
),
(
    'English',
    'English',
    'Aa',
    'Language',
    'Blue',
    'A language-enrichment program focused on foundational English skills.',
    'Weekly English classes on Saturdays.',
    'Lessons include foundational English work.',
    '$30.00 per one-hour lesson.',
    4
),
(
    'MusicAdventure',
    'Music Adventure',
    '♪',
    'Beginner Music',
    'Purple',
    'A playful introduction to music for young beginner students.',
    'Free introductory music classes for Learning Jungle students.',
    'Weekly 15-minute Piano Adventure activities.',
    'Free',
    5
);

COMMIT;
