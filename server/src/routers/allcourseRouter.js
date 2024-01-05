const express = require('express');
const courseRouter=express.Router();


const {getCourses}=require('../controllers/allcourseController');


courseRouter.get("/",getCourses);

// userRouter.get("/profile",(req,res)=>
// {
//     res.status(200).send(
//         {
//             message:'user profile is returned',
//         }
//     );
// });

module.exports =courseRouter;