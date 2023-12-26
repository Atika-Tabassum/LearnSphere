const express =require("express");
const morgan =require('morgan');
const createError =require('http-errors');
const bodyParser =require('body-parser');
const xssClean=require('xss-clean');
const rateLimit=require('express-rate-limit');
const signupRouter = require("./routers/signupRouter");
const userRouter = require("./routers/userRouter");
const loginRouter = require("./routers/loginRouter");
<<<<<<< HEAD
const addCourseRouter=require("./routers/addCourseRouter");
=======
const addCourseRouter = require("./routers/addCourseRouter");
>>>>>>> 9d1445c (basic data insert,fetch)


//const pool=require('../db');

const app =express();



const rateLimiter = rateLimit({
    windowMs: 1*60*1000,  //1 min
    max: 5,
    message: 'Too many requests from this IP.Please try again later',
});

app.use(xssClean());
app.use(rateLimit());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true }));
app.use(express.json());
app.use('/signup',signupRouter);
app.use('/users',userRouter);
app.use('/login',loginRouter);
<<<<<<< HEAD
app.use('/addCourse',addCourseRouter);

=======
app.use('/addcourse',addCourseRouter);
>>>>>>> 9d1445c (basic data insert,fetch)


app.get("/test",rateLimiter,(req,res)=>
{
res.status(200).send(
    {
        message:'get: api is testing working fine',
    }
);
})




// client error handling
app.use((req,res,next)=>
{
    // res.status(404).json({message:'route not found'});
    next(createError(404,'route not found'));
}
);

// server error handling
app.use((err,req,res,next)=>
{
    // console.error(err.stack);
    // res.status(500).send('Something broke!');
    return res.status(err.status||500).json({
        success:false,
        message:err.message,
    }
    );
}
);

module.exports=app;

