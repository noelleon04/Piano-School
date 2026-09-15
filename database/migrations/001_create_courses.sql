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

COMMIT;

 
