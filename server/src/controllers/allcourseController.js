const pool=require('../../db');

const createError=require('http-errors');



const getCourses=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
       const courses=await pool.query("SELECT * FROM Course ");
       res.status(200).json({message:"users are returned",data:courses.rows})
       //res.status(200).json({message: "users are returned"});
    }
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getCourses};