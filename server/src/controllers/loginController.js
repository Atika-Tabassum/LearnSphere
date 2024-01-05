const pool=require('../../db');

const createError=require('http-errors');



const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
       const {email,password} =req.body;
       const users=await pool.query("SELECT * FROM \"User\" WHERE email=$1 AND password=$2 ",[email,password]);
       if (users.rows.length > 0) {
        const user = users.rows[0];
        console.log(users.rows[0]);
        res.status(200).json({ message: "User logged in successfully", userId: user.id});
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
}
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};