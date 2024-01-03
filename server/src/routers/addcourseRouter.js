const express=require('express');
const userRouter=express.Router();


const {getUsers}=require('../controllers/addcourseController');


userRouter.get("/",getUsers);

// userRouter.get("/profile",(req,res)=>
// {
//     res.status(200).send(
//         {
//             message:'user profile is returned',
//         }
//     );
// });

module.exports =userRouter;