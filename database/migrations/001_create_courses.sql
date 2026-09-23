BEGIN;

CREATE TABLE IF NOT EXISTS courses (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    course_id VARCHAR(50) NOT NULL UNIQUE,
    course_title VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    theme VARCHAR(20) NOT NULL
        CHECK (theme IN ('Green', 'Red', 'Yellow', 'Blue', 'Purple')),
    details TEXT NOT NULL,
    format_summary TEXT NOT NULL,
    description TEXT NOT NULL,
    pricing_summary TEXT NOT NULL,
    display_order SMALLINT NOT NULL UNIQUE
        CHECK (display_order > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);


 
CREATE TABLE IF NOT EXISTS timeslot(
    timeslot_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    day_of_week VARCHAR (20) NOT NULL
        CHECK (day_of_week IN('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday')),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL
        CHECK(end_time > start_time),
    UNIQUE(day_of_week,start_time,end_time)
);
CREATE TABLE IF NOT EXISTS offering(
    offering_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES
        courses(id),
    timeslot_id INTEGER NOT NULL REFERENCES
        timeslot(timeslot_id),
    capacity  INTEGER NOT NULL
        CHECK(capacity > 0 ),
    UNIQUE(course_Id,timeslot_id)
);

CREATE TABLE IF NOT EXISTS customer(
    customer_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    parent_first_name TEXT NOT NULL,
    parent_last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    telephone VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS student(
    student_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES
        customer(customer_id),
    student_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS registration(
    registration_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES
        student(student_id),
    offering_id INTEGER NOT NULL REFERENCES
        offering(offering_id),
    UNIQUE(student_id,offering_id),
    status VARCHAR (10) NOT NULL
        CHECK(status IN('confirmed', 'pending','cancelled','ended')),
    start_date DATE NOT NULL,
    end_date DATE,
    CHECK(end_date IS NULL OR end_date >= start_date)
);

COMMIT; 