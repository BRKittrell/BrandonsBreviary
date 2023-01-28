DROP TABLE IF EXISTS visitors;

CREATE TABLE visitors (
    visitor_number serial PRIMARY KEY,
    visitor_name TEXT,
    visitor_org TEXT,
    visitor_comment VARCHAR (200)
);

INSERT INTO visitors(visitor_name, visitor_org, visitor_comment) VALUES 
('brandon', 'galvanize', 'nice site, bro'),
('bethannie', 'uscg', 'wow... impressive')