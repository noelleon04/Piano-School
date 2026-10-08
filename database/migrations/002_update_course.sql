-- BEGIN;

-- ALTER TABLE offering
-- ADD COLUMN is_visible BOOLEAN NOT NULL DEFAULT FALSE,
-- ADD COLUMN is_open_for_registration BOOLEAN NOT NULL DEFAULT FALSE;

-- COMMIT;



BEGIN;

ALTER TABLE student
RENAME COLUMN student_name TO student_first_name;

ALTER TABLE student
ADD COLUMN student_last_name TEXT NOT NULL;

COMMIT;