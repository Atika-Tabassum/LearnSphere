const pool=require('../../db');

const createError=require('http-errors');



const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
       const {email,password} =req.body;
       const users=await pool.query("SELECT * FROM \"User\" WHERE email=$1 AND password=$2 ",[email,password]);
       res.status(200).json({message:"user is returned",data:users.rows})
}
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};