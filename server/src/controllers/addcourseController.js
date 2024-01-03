const pool=require('../../db');

const createError=require('http-errors');

const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
        console.log("at post");
        const {name, description, course_class, course_fee,teacher_id} =req.body;
        console.log(name);

        // inserting data into User table
        const newUser= await pool.query("INSERT INTO  \"course\" (name, description,course_class, course_fee,teacher_id) VALUES($1,$2,$3,$4,$5) RETURNING *",
        [name, description,course_class, course_fee,teacher_id]
        );
        
        // Retrieve the user's profile from the database

        
        

}
catch(error)
{
    console.log(error.message);
    next(error);
}

};



module.exports={getUsers};