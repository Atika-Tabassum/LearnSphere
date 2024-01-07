import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "../signup/SignUpForm.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogInClick = async () => {
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:3001/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      const { userId } = data; 
      navigate(`/${userId}/myprofile`, { replace: true });
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
        <button type="button" onClick={onLogInClick}>
          Log In
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
