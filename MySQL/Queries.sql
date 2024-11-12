-- SET SQL_SAFE_UPDATES = 0;
CREATE DATABASE DELTEST;
DROP DATABASE DELTEST;
-- DISPLAY ALL THE DATABASES
-- SHOW DATABASES;
-- SWITCH TO THE DB
USE SAKILA;
USE SAKILA;

-- FETCH STATIC VALUES
SELECT 'THURSDAY';
SELECT CONCAT('THURSDAY' , 'IS MY DAY!');
-- USER DEFINED COLUMN NAME
SELECT 'THURSDAY' AS 'DAY';

SELECT 100+200;
SELECT 100+200 AS TOTAL;

-- SCALAR FUNCTIONS
-- SCALAR FUNCTIONS OPERATE ON A SINGLE VALUE AND RETURN A SINGLE VALUE.
SELECT PI();
SELECT MOD(45,7);
SELECT SQRT(25);


-- SELECTING DATA FROM THE TABLES
SELECT * FROM ACTOR;
SELECT * FROM ACTOR
ORDER BY FIRST_NAME;
SELECT * FROM ACTOR
ORDER BY FIRST_NAME ASC;
SELECT * FROM ACTOR
ORDER BY FIRST_NAME DESC;
SELECT * FROM ACTOR
ORDER BY 3;
SELECT * FROM ACTOR
ORDER BY 3 DESC;

-- FILTERING ROWS
SELECT * FROM ACTOR WHERE ACTOR_ID < 6;
SELECT * FROM ACTOR WHERE LAST_NAME = 'GUINESS';

-- MULTI COLUMN SORT
SELECT * FROM ACTOR ORDER BY FIRST_NAME;
SELECT * FROM ACTOR ORDER BY FIRST_NAME DESC, LAST_NAME DESC;
-- INSTANT PRACTICE.
-- SORT THE ACTORS BY LAST_NAME ASC AND FIRST NAME DESCENDING USING THE COLUMN INDEX.
select * from ACTOR order by 2 ASC,3 DESC;

SELECT * FROM ACTOR WHERE 1 = 1;
SELECT * FROM ACTOR WHERE 1 = 2;

-- COUNT AGGREGATE FUNCTION
SELECT COUNT(*) FROM ACTOR;
-- INSTANT PRACTICE
-- SAM, A DATABASE DEVELOPER WOULD LIKE TO DISPLAY THE DETAILS OF ACTORS.
-- DISPLAY ALL THE COLUMNS IN THE SAME ORDER
-- return_date should be  'DATE OF RETURN' , inventory_id should be 'INVENTORY'.

SELECT rental_id, rental_date, inventory_id AS INVENTORY, customer_id, return_date AS 'DATE OF RETURN', 
staff_id, last_update FROM RENTAL;
SELECT * FROM RENTAL ORDER BY rental_id ASC


SELECT  1, 2, 3 AS 'INVENTORY', 4, 5 AS 'DATE OF RETURN', 6, 7 FROM RENTAL;  
SELECT 'THE inventory id is : ', inventory_id , 2, 3 AS 'INVENTORY', 4, 5 AS 'DATE OF RETURN', 6, 7 FROM RENTAL
ORDER BY inventory_id DESC; 
SELECT MAX(INVENTORY_ID) FROM RENTAL;
UPDATE PAYMENT SET AMOUNT = 2.1 WHERE PAYMENT_ID = 1;
SELECT * FROM PAYMENT;
SELECT PAYMENT_ID, AMOUNT, ROUND(AMOUNT) FROM PAYMENT;
SELECT ROUND(8.45) FROM PAYMENT;
SELECT ROUND(8.5) FROM PAYMENT;
SELECT ROUND(-14.33);

SELECT ROUND(-14.53);

SELECT ROUND(1.234, 0);
SELECT ROUND(1.534, 0);

SELECT ROUND(1.554, 1);
SELECT ROUND(-14.73);
SELECT ROUND(1.234, 1);
-- PREDICT THE OUTPUT
-- MISTAKE 123.00
SELECT ROUND(1234.567, -1);
SELECT ROUND(1256.567, -2) AS 'ROUNED VALUE';

SELECT AMOUNT FROM PAYMENT;
SELECT AMOUNT, ROUND(AMOUNT), ROUND(AMOUNT,0), ROUND(AMOUNT,1) FROM PAYMENT;
SELECT FLOOR(1.2);   
SELECT CEILING(1.2);
-- PREDICT 
SELECT FLOOR(-1.2);   -- -2 ..... -1
SELECT CEILING (-1.2);

SELECT 1 + 1 AS 'ADD';
SELECT '1' + '11' AS 'ADD';
SELECT '12A' + '11' AS 'ADD';
SELECT 'A1' + '2' AS 'ADD';
SELECT 'A1' + 'A1' AS 'ADD';




SELECT ACTOR_ID, CONCAT('FIRST NAME: ', FIRST_NAME, ' LAST NAME: ', LAST_NAME) AS 'FULL NAME' FROM actor;

SELECT CONCAT('RED, ', 'BLUE, ', 'GREEN, ' ) AS COLOURS;
SELECT LOWER(FIRST_NAME) FROM actor;
SELECT UPPER(FIRST_NAME) FROM actor;
SELECT LEFT(FIRST_NAME, 2) FROM ACTOR;
SELECT LEFT(FIRST_NAME, 6) FROM ACTOR;
SELECT LEFT(FIRST_NAME, 6) FROM ACTOR;
SELECT CONCAT(UPPER(FIRST_NAME),'.',LEFT(LAST_NAME, 1)) AS FULL_NAME FROM ACTOR;
SELECT CONCAT(LEFT(FIRST_NAME, 1),'.',LEFT(LAST_NAME, 1)) AS FULL_NAME FROM ACTOR;
SELECT CONCAT(LEFT(FIRST_NAME, 1),'.',LEFT(LAST_NAME, 1)) AS FULL_NAME FROM ACTOR;


-- 1. Display all the records from the ACTOR table.
SELECT * FROM actor;

-- 2. Display the first name and last name of all actors.
SELECT actor_id, first_name, last_name FROM actor;

-- 3. Display the total number of actors in the ACTOR table.
SELECT COUNT(actor_id) AS total FROM actor;
-- 4. Display the first name of actors whose last name is 'GUINESS'.
SELECT * FROM actor WHERE last_name LIKE '%GUINESS';

SELECT first_name FROM actor WHERE last_name = 'GUINESS';

-- 5. Display the first name and last name of actors, sorted by first name in ascending order.
SELECT * FROM actor 
ORDER BY first_name;
SELECT first_name, last_name 
FROM actor 
ORDER BY first_name ASC;

-- 6. Display the first name and last name of actors, sorted by last name in descending order.
SELECT first_name, last_name 
FROM actor 
ORDER BY last_name DESC;

-- 7. Display the first name and last name of actors whose first name starts with 'A'.
SELECT first_name, last_name 
FROM actor 
WHERE first_name LIKE 'A%';

-- 8. Display the first name and last name of actors whose first name is 4 characters long.
SELECT first_name, last_name 
FROM actor 
WHERE first_name LIKE '____';


-- 9. Display the first name and last name of actors whose last name ends with 'y' and is 5 characters long.
SELECT first_name, last_name 
FROM actor 
WHERE last_name LIKE '____y';


-- 10. Display the first name and last name of actors whose first name is 'KENNETH' and actor_id is less than 100.
SELECT * FROM actor 
WHERE first_name = 'KENNITH' 
AND actor_id <100;


-- 11. Display the first name and last name of actors whose last name is the same as the first name of actor 'CUBA'.
SELECT * FROM actor 
WHERE last_name 
IN(SELECT last_name FROM actor WHERE first_name = 'CUBA')

-- 12. Display the first name and last name of actors whose actor_id is in the set (5, 15, 23, 32, 45).
SELECT * FROM actor 
WHERE actor_id 
IN (5, 15, 23, 32, 45)

-- 13. Display the first name and last name of actors whose actor_id is not in the set (1, 3, 7, 4).

SELECT * FROM  actor 
WHERE NOT (actor_id = '1' OR actor_id = '3' OR actor_id = '7' OR actor_id = '4')

-- 14. Display the first name and last name of actors whose last name is 'OLIVIER', 'ALLEN', or 'BIRCH', sorted by actor_id in ascending order.
SELECT first_name, last_name 
FROM actor
WHERE last_name IN('OLIVER', 'ALLEN', 'BIRCH')
ORDER BY actor_id DESC;

-- 15. Display the first name and last name of actors whose first name is 'KENNETH' and actor_id is less than 100 and last name ends with 'I' or 'W'.
SELECT * 
FROM actor 
WHERE first_name = 'KENNITH' AND actor_id <100 
AND (last_name LIKE '%I' OR last_name LIKE '%W');


-- 16. Display the total number of distinct first names in the ACTOR table.
SELECT DISTINCT first_name FROM actor;

-- 17. Display the total number of actors whose first name is 'NICK'.
SELECT first_name
FROM actor
WHERE first_name IN('NICK');

SELECT COUNT(*) 
FROM actor 
WHERE first_name = 'NICK';


-- 18. Display the total number of actors whose actor_id is between 1 and 5.
SELECT * FROM actor 
WHERE actor_id 
BETWEEN 1 AND 5;

-- 19. Display the total number of actors whose actor_id is not between 1 and 5.
SELECT * FROM actor 
WHERE actor_id 
NOT BETWEEN 1 AND 5;


-- 20. Display the total number of actors whose first name starts with 'A'.
SELECT COUNT(*)
FROM actor
WHERE first_name LIKE 'A%';

-- 21. Display the first name and last name of actors, with the first name in uppercase.
SELECT UPPER(first_name) AS first_name, 
LOWER(last_name) AS last_name
FROM actor;


-- 22. Display the first name and last name of actors, with the last name in lowercase.
SELECT LOWER(last_name) AS last_name, last_name
FROM actor;

SELECT first_name, 
LOWER(last_name) AS last_name 
FROM actor;


-- 23. Display the first name and last name of actors, with the first two characters of the first name.
SELECT SUBSTRING(first_name, 1, 2) AS first_name, last_name
FROM actor;


-- 24. Display the first name and last name of actors, with the first name reversed.
SELECT first_name, REVERSE(first_name) AS first_name, last_name FROM actor;


-- 25. Display the first name and last name of actors, with the full name in the format 'LAST_NAME, FIRST_NAME'.


--Modified Comparison operator
SELECT * FROM actor WHERE first_name <= 'AL%';
SELECT * FROM actor WHERE first_name >= 'AL%';


--ACTOR ID 
SELECT * FROM actor WHERE actor_id > ANY (SELECT 10);

SELECT * FROM actor WHERE actor_id > ANY (SELECT actor_id FROM actor WHERE actor_id IN (1,3,4,7));
SELECT * FROM actor WHERE actor_id < ANY (SELECT actor_id FROM actor WHERE actor_id IN (1,3,4,500));
SELECT * FROM actor WHERE actor_id < ALL (SELECT actor_id FROM actor WHERE actor_id IN (1,3,4,7));



--WILD CARD THEN USE LIKE
--IF NUMBERS THEN USE BETWEEN


