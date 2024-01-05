import React, { Fragment, useState } from "react";
import classes from "./signup/SignUpForm.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onLogInClick = async () => {
      try {
        const body = {email, password};
          const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const data = await response.json();
          console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
  return (
    <Fragment>
      <h2 className="text-center">Login</h2>
      <form className={classes.format}>
        <label>Email</label>
        <br></br>
        <input
          className={classes.inputbox}
          type="email"
          placeholder="abc@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          className={classes.inputbox}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <br></br>
      <br></br>
      <button onClick={onLogInClick}>Log In</button>
      </form>
    </Fragment>
  );
};

export default Login;
