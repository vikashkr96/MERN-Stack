use instagram;

show tables ;

select * from post;
insert into user values (1 , 14 , "adam" , "adam12@gmail.com" , 123 , 145),
                        (2 , 13 , "bob" , "bob234@yahho.in" , 456 , 500),
						(3 , 15 , "adil" , "adilll@gmail.com" , 410 , 423);
                        
SELECT * FROM user WHERE followers >= 200;

-- output will be: 
-- 2	13	bob	bob234@yahho.in	456	500
-- 3	15	adil	adilll@gmail.com	410	423

SELECT * FROM user WHERE followers BETWEEN 350 AND 450;

-- Output: 
-- 3	15	adil	adilll@gmail.com	410	423
					


SELECT  name , age , email 
FROM user
WHERE age NOT IN (14 , 16);

-- output will be : 
-- adil	15	adilll@gmail.com
-- bob	13	bob234@yahho.in


