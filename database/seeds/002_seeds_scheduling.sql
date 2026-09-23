BEGIN;

-- Reusable weekend options for 30-minute lessons.
-- These rows describe possible times. A time becomes bookable only after
-- an offering connects it to a course.
INSERT INTO timeslot (
    day_of_week,
    start_time,
    end_time
)
VALUES
    ('Saturday', '09:00', '09:30'),
    ('Saturday', '09:30', '10:00'),
    ('Saturday', '10:00', '10:30'),
    ('Saturday', '10:30', '11:00'),
    ('Saturday', '11:00', '11:30'),
    ('Saturday', '11:30', '12:00'),
    ('Saturday', '12:00', '12:30'),
    ('Saturday', '12:30', '13:00'),
    ('Saturday', '13:00', '13:30'),
    ('Saturday', '13:30', '14:00'),
    ('Sunday', '10:00', '10:30'),
    ('Sunday', '10:30', '11:00'),
    ('Sunday', '11:00', '11:30'),
    ('Sunday', '11:30', '12:00'),
    ('Sunday', '12:00', '12:30'),
    ('Sunday', '12:30', '13:00'),
    ('Sunday', '13:00', '13:30'),
    ('Sunday', '13:30', '14:00')
ON CONFLICT (day_of_week, start_time, end_time) DO NOTHING;

-- Piano is taught one-to-one, so each scheduled offering has one seat.
INSERT INTO offering (
    course_id,
    timeslot_id,
    capacity
)
SELECT
    courses.id,
    timeslot.timeslot_id,
    1
FROM courses
CROSS JOIN timeslot
WHERE courses.course_id = 'Piano'
    AND (
        (
            timeslot.day_of_week = 'Saturday'
            AND timeslot.start_time >= '09:00'
            AND timeslot.end_time <= '14:00'
        )
        OR
        (
            timeslot.day_of_week = 'Sunday'
            AND timeslot.start_time >= '10:00'
            AND timeslot.end_time <= '14:00'
        )
    )
ON CONFLICT (course_id, timeslot_id) DO NOTHING;

COMMIT;
