import React, { Fragment, useState } from "react";
import classes from "./SignUpForm.module.css";
import { Link } from "react-router-dom";


const TeacherSignUp=()=>{
  const user_type="Teacher";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm_password, setConfirmPassword] = useState("");
  const [educational_qualifications, setEducational_qualifications] = useState("");

  const onSignUpClick = async () => {
    console.log(user_type);
      try {
        const body = { user_type, name, email, password, educational_qualifications };
        if (password === Confirm_password) {
          const response = await fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const data = await response.json();
          console.log(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    return (
        <Fragment>
          <h2>Registration</h2>
          <form className={classes.format}>
            <label>Name</label>
      <br></br>
      <input className={classes.inputbox}
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <br></br>
      <br></br>
      <label>Email</label>
      <br></br>
      <input className={classes.inputbox}
        type="email"
        placeholder="abc@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <br></br>
      <br></br>
      <label>Educational Qualification</label>
      <br></br>
      <input className={classes.inputbox}
        type="text"
        placeholder="Enter your educational qualification"
        onChange={(e) => setEducational_qualifications(e.target.value)}
        value={educational_qualifications}
      ></input>
      <br></br>
      <br></br>
      <label>Password</label>
      <br></br>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <br></br>
      <br></br>
      <label>Confirm Password</label>
      <br></br>
      <input className={classes.inputbox}
        type="password"
        placeholder="Re enter your password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={Confirm_password}
      ></input>
      <br></br>
      <br></br>
      <button onClick={onSignUpClick}>Sign Up</button>
      <br></br>
        <br></br>
        <p  className={classes.link} >
          Already have an account?&nbsp;&nbsp;
          <b>
            <Link to="/login">Login</Link>
          </b>
        </p>
      </form>
        </Fragment>
    );
}

export default TeacherSignUp;