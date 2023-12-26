CREATE DATABASE Learn;

-- User table
 -- SERIAL is used for the id column to create 
    -- an auto-incrementing integer column that acts as the primary key.
CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Student table
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    class VARCHAR(50),
    user_id INT REFERENCES "User" (id)
);

-- Teacher table
-- The TEXT data type is used for storing unlimited-length character strings.
-- It can store strings of any length, and PostgreSQL will not enforce a maximum length. 
-- This data type is suitable for storing large amounts of text data.
CREATE TABLE Teacher (
    teacher_id INT PRIMARY KEY,
    educational_qualifications TEXT,
    user_id INT UNIQUE REFERENCES "User" (id)
);


--Course Table
CREATE TABLE Course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    class VARCHAR(50),
    course_fee DECIMAL(10, 2),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

--to get all users
SELECT *
FROM "User";

--to log in
SELECT *
FROM "User"
WHERE email= email_id AND password = user_password;