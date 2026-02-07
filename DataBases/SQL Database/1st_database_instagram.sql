-- CREATE DATABASE college;
-- use college;
-- CREATE TABLE student (roll_no INT(20) , name VARCHAR(30) , age INT(10) );

-- INSERT INTO student 
-- VALUES
-- ( 101 , "adam" , 12),
-- (102 , "bob" , 14 );

-- select * FROM student;

CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

CREATE TABLE user (
   id INT ,
   age INT,
   name VARCHAR(30) NOT NULL ,
   email VARCHAR(50) UNIQUE,
   followers INT DEFAULT 0,
   following INT ,
   CONSTRAINT  CHECK (age >= 13 ),
   PRIMARY KEY (id)
);

CREATE TABLE post (
   id INT primary key,
   content VARCHAR(100),
   user_id INT,
   foreign key (user_id) references user(id)
);





