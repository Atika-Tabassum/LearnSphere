CREATE DATABASE Learn;

-- User table
 -- SERIAL is used for the id column to create 
    -- an auto-incrementing integer column that acts as the primary key.
CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type VARCHAR NOT NULL
);

-- User table with usertype column
-- CREATE TABLE "User" (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     usertype CHAR(1) CHECK (usertype IN ('Student', 'Teacher')) NOT NULL
-- );


-- Student table
-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     class VARCHAR(50),
--     user_id INT REFERENCES "User" (id)
-- );

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    class VARCHAR(50),
    user_id INT REFERENCES "User" (id)
);

-- Teacher table

-- CREATE TABLE Teacher (
--     teacher_id SERIAL PRIMARY KEY,
--     educational_qualifications VARCHAR(50),
--     user_id INT UNIQUE REFERENCES "User" (id)
-- );


CREATE TABLE Teacher (
    teacher_id SERIAL PRIMARY KEY,
    educational_qualifications VARCHAR(50),
    user_id INT UNIQUE REFERENCES "User" (id)
);


--Course Table
-- CREATE TABLE Course (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255),
--     class VARCHAR(50),
--     course_fee DECIMAL(10, 2),
--     teacher_id INT,
--     FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
-- );

CREATE TABLE Course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    course_class VARCHAR(50),
    course_fee DECIMAL(10, 2),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);


-- Content table
CREATE TABLE Content (
    id INT PRIMARY KEY,
    course_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT,
    content_type VARCHAR(50),
    FOREIGN KEY (course_id) REFERENCES Course(id)
);

-- VideoContent table
CREATE TABLE VideoContent (
    id INT PRIMARY KEY,
    content_id INT,
    link VARCHAR(255) NOT NULL,
    FOREIGN KEY (content_id) REFERENCES Content(id)
);

-- Exam table
CREATE TABLE Exam (
    id INT PRIMARY KEY,
    content_id INT,
    total_marks INT,
    obtained_marks INT,
    user_id INT,
    FOREIGN KEY (content_id) REFERENCES Content(id),
    FOREIGN KEY (user_id) REFERENCES "User"(id)
);

-- Question table
CREATE TABLE Question (
    id INT PRIMARY KEY,
    serial_no INT,
    description TEXT,
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    option3 VARCHAR(255),
    option4 VARCHAR(255),
    correct_answer INT,
    obtained_marks INT,
    exam_id INT,
    FOREIGN KEY (exam_id) REFERENCES Exam(id)
);


--to get all users
SELECT *
FROM "User";

--to log in
SELECT *
FROM "User"
WHERE email= email_id AND password = user_password;