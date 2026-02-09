show databases;
use instagram;

show tables;
select * from post;

select * from user;

-- uses of limit clause ..........
SELECT name , email 
FROM user
WHERE age >=10
LIMIT 2;

-- output will be .........
-- adam	adam12@gmail.com
-- bob	bob234@yahho.in

-- uses of "Order by" clause ..........
SELECT age, name 
FROM user
order by age ASC;


-- output will be .........
-- 13	bob
-- 14	adam
-- 15	adil

-- Aggregate_functions.........................
SELECT max(age)
FROM user;

SELECT count(age)
FROM user 
WHERE age > 12;

SELECT sum(followers)
FROM user ;

-- uses of "Group by" clause ..........
-- eg: group on the basis of age and return the corresponding count in asc. order wrt age
SELECT age , count(id)
FROM user 
group by age
order by age ASC;

-- uses of "having" clause (applied on a group).......
SELECT age , max(followers)
FROM user 
GROUP BY age
HAVING max(followers) > 200;


