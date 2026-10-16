-- Already added manually in the current development database through pgAdmin.
-- Apply only to databases where this column has not yet been added.
BEGIN;

ALTER TABLE registration
ADD COLUMN submission_id UUID UNIQUE;

COMMIT;
