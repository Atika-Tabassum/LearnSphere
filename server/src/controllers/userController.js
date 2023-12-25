const pool=require('../../db');

const createError=require('http-errors');

const users =require('../models/userModels');

const getUsers=async (req,res,next)=>
{
    // console.log(req.body.id);
    try{
        const {name,email,password} =req.body;
        const newUser= await pool.query("INSERT INTO  \"User\" (name,email,password) VALUES($1,$2,$3) RETURNING *",
        [name,email,password]
        );
        res.json(newUser.rows[0]);
// res.status(200).send(
//     {
//         message:'users were returned',
//         users:users,
//     }
//     );

}
catch(error)
{
    console.log(error.message);
    next(error);
}

};

module.exports={getUsers};