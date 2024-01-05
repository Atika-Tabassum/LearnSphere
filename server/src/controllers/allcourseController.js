const pool=require('../../db');

const createError=require('http-errors');



const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
       const users=await pool.query("SELECT * FROM \"course\" ");
       res.status(200).json({message:"users are returned",data:users.rows})
       //res.status(200).json({message: "users are returned"});
    }
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};