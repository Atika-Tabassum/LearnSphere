const pool=require('../../db');

const createError=require('http-errors');

<<<<<<< HEAD

=======
// CREATE TABLE Course (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description TEXT,
//     class VARCHAR(50),
//     course_fee DECIMAL(10, 2),
//     teacher_id INT,
//     FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id)
// );
>>>>>>> 9d1445c (basic data insert,fetch)

const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
        const {name,email,password} =req.body;

        // inserting data into User table
        const newUser= await pool.query("INSERT INTO  \"User\" (name,email,password) VALUES($1,$2,$3) RETURNING *",
        [name,email,password]
        );
        res.json(newUser.rows[0]);
<<<<<<< HEAD
=======

>>>>>>> 9d1445c (basic data insert,fetch)
}
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};