import React, { Fragment, useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [user_type,setUserType]= useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm_password, setConfirmPassword] = useState("");

  const onSignUpClick = async () => {
    try {
      const body = {user_type, name, email, password};
      if(password===Confirm_password)
      {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
    }
    else
    {
        console.log("error");
    }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center">Welcome To LearnSphere!!</h1>
      <h3 className="text-center">Connect, Learn, and Grow</h3>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <div class="main">
        <div class="signup">
            <form id="register">
               <label>Select your role</label>
               <br></br>
               <input 
                type="text"
                placeholder="Teacher/Student"
                onChange={(e) => setUserType(e.target.value)}
                value={user_type}
                ></input>
               {/* <label>
               <input type="radio" name="userType" value="teacher" />
               Teacher&nbsp;&nbsp;
               </label>
               <label>
               <input type="radio" name="userType" value="student" />
                Student
                </label> */}
                <br></br>
                <br></br>
                <label>Name</label>
                <br></br>
                <input 
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                ></input>
                <br></br>
                <br></br>
                <label>Email</label>
                <br></br>
                <input 
                type="email"
                placeholder="abc@gmail.com" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}></input>
                <br></br>
                <br></br>
                <label>Password</label>
                <br></br>
                <input 
                type="password"
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}></input>
                <br></br>
                <br></br>
                <label>Confirm Password</label>
                <br></br>
                <input 
                type="password"
                placeholder="Re enter your password" 
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={Confirm_password}></input>
                <br></br>
                <br></br>
                <button onClick={onSignUpClick}>Sign Up</button>
            </form>
            <br></br>
            <br></br>
            <p>Already have an account?&nbsp;&nbsp;
            <b><a href="http://localhost:3001/login">Login</a></b></p>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
