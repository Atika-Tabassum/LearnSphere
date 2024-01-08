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



CREATE TABLE Teacher (
    teacher_id SERIAL PRIMARY KEY,
    educational_qualifications VARCHAR(50),
    user_id INT UNIQUE REFERENCES "User" (id)
);

--didn't use
CREATE TABLE Course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    course_class VARCHAR(50),
    course_fee DECIMAL(10, 2),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

--course table
--dsa
CREATE TABLE Course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    course_class VARCHAR(50),
    course_fee DECIMAL(10, 2),
    rating DECIMAL(10, 2),
    number_of_topic INT,
    duration INT,
    image VARCHAR(255),
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
);

-- Topic table
--graph
CREATE TABLE Topic (
    topic_id SERIAL PRIMARY KEY,
    serial_no INT,
    topic VARCHAR(255) NOT NULL,
    description TEXT,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Course(id)
);

-- Content table
--bfs, dfs
CREATE TABLE Content (
    content_id SERIAL PRIMARY KEY,
    topic_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content_type VARCHAR(50),
    FOREIGN KEY (topic_id) REFERENCES Topic(topic_id)
);

-- VideoContent table
CREATE TABLE VideoContent (
    vid_id SERIAL PRIMARY KEY,
    content_id INT,
    link VARCHAR(255) NOT NULL,
    student_id INT,
    FOREIGN KEY (content_id) REFERENCES Content(content_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id)
);

-- Exam table
CREATE TABLE Exam (
    exam_id SERIAL PRIMARY KEY,
    content_id INT,
    total_marks INT,
    obtained_marks INT,
    student_id INT,
    FOREIGN KEY (content_id) REFERENCES Content(content_id),
    FOREIGN KEY (student_id) REFERENCES student(student_id)
);

-- Question table
CREATE TABLE Question (
    question_id SERIAL PRIMARY KEY,
    serial_no INT,
    description TEXT,
    option1 VARCHAR(255),
    option2 VARCHAR(255),
    option3 VARCHAR(255),
    option4 VARCHAR(255),
    correct_answer INT,
    --obtained_marks INT,
    exam_id INT,
    FOREIGN KEY (exam_id) REFERENCES Exam(exam_id)
);

CREATE TABLE GIVE_EXAM(
    give_exam_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    topic_id INT,
    content_id INT,
    exam_id INT,
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(id),
    FOREIGN KEY (topic_id) REFERENCES topic(topic_id),
    FOREIGN KEY (content_id) REFERENCES content(content_id),
    FOREIGN KEY (exam_id) REFERENCES exam(exam_id)
);


CREATE TABLE ENROLLMENT(
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(id)
    
);

CREATE TABLE DISCUSSION
(
    discussion_id SERIAL PRIMARY KEY,
    course_id INT,
    user_id INT,
    parent_id INT,
    description TEXT,
    comment_time TIMESTAMP(6) default CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "User"(id),
    FOREIGN KEY (course_id) REFERENCES course(id),
    FOREIGN KEY (parent_id) REFERENCES DISCUSSION(discussion_id)
);

CREATE TABLE PROGRESS
(
    progress_id SERIAL PRIMARY KEY,
    student_id INT,
    course_id INT,
    topic_id INT,
    content_id INT,
    exam_id INT,
    vid_id INT,
    is_video_done INT default 0,
    is_exam_done INT default -1,
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(id),
    FOREIGN KEY (topic_id) REFERENCES topic(topic_id),
    FOREIGN KEY (content_id) REFERENCES content(content_id),
    FOREIGN KEY (exam_id) REFERENCES exam(exam_id),
    FOREIGN KEY (vid_id) REFERENCES VideoContent(vid_id)
);


CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    date_added DATE NOT NULL DEFAULT CURRENT_DATE,
    is_package INT,
    total_amount INT,
    FOREIGN KEY (user_id) REFERENCES "User"(id),
    FOREIGN KEY (course_id) REFERENCES course(id)
    
);

--a new user will get a promo which will be valid for 3 months approx
CREATE TABLE promo(
    promo_name VARCHAR(200) PRIMARY KEY,
    promo_discount DECIMAL(2, 1) NOT NULL,
    promo_start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    promo_end_date DATE NOT NULL
);

CREATE TABLE single_course(
    single_course_id SERIAL PRIMARY KEY,
    promo_name VARCHAR(200),
    order_id INT REFERENCES orders(order_id),
    FOREIGN KEY (promo_name) REFERENCES promo(promo_name)
);

-- CREATE TABLE package(
--     package_id SERIAL PRIMARY KEY,
--     [courses_id],
--     discount DECIMAL(10, 2)
-- );


--to get all users
SELECT *
FROM "User";

--to log in
SELECT *
FROM "User"
WHERE email= email_id AND password = user_password;