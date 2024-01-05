import React, { Fragment, useState } from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";

const Signup=()=> {
  return (
    <Fragment>
      <div className={classes.main}>
        <form id="register">
          <label className={classes.custom}>Select your role</label>
          <br></br>
          <br></br>
          <Link to ="/signup_teacher">
          <label>
            <input
              type="radio"
              name="userType"
              value="teacher"
            />
            Teacher&nbsp;&nbsp;
          </label>
          </Link>
          <br></br>
          <Link to ="/signup_student">
          <label>
            <input
              type="radio"
              name="userType"
              value="student"
            />
            Student
          </label>
          <br></br>
          </Link>
          <br></br>
        </form>
      </div>
    </Fragment>
  );
}

export default Signup;
