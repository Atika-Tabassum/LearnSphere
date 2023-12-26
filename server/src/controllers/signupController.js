const pool=require('../../db');

const createError=require('http-errors');



const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
        const {name,email,password} =req.body;

        // inserting data into User table
        const newUser= await pool.query("INSERT INTO  \"User\" (name,email,password) VALUES($1,$2,$3) RETURNING *",
        [name,email,password]
        );
        

}
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};