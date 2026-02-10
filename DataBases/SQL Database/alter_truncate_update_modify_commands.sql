SHOW DATABASES;
USE instagram;

-- How to update values in the table......
SET SQL_SAFE_UPDATES = 0;
UPDATE user 
SET followers = 400
WHERE age = 13;
SELECT * FROM user;

-- how to delete a row from the table
DELETE from user
WHERE age = 14;
SELECT * FROM user;

-- How to use ALTER clause
-- add column:
ALTER TABLE user
ADD COLUMN city VARCHAR(30) DEFAULT "delhi";
ALTER TABLE user
ADD COLUMN country VARCHAR(30) DEFAULT "India";
SELECT * FROM user;

-- drop column:
ALTER TABLE user
DROP COLUMN country ;
SELECT * FROM user;

-- rename a table
ALTER TABLE user
RENAME TO instaUser ;
SELECT * FROM instaUser;

-- rename a column
ALTER TABLE instaUser
CHANGE COLUMN email mail VARCHAR(30) ;
SELECT * FROM instaUser;

-- modify a column (like- dtype , constraints )
ALTER TABLE instaUser
MODIFY mail VARCHAR(30) DEFAULT "demo@gamil.com";

-- TRUNCATE TABLE	
-- Use to delete table's data
DROP TABLE post;    -- (connection dropped)
TRUNCATE TABLE instaUser;  







