import React, { Fragment, useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [user_type, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirm_password, setConfirmPassword] = useState("");
  const [level, setLevel] = useState("");
  const [educational_qualifications, setEducational_qualifications] = useState("");

  const onSignUpClick = async () => {
    console.log(user_type);

    if (user_type === "Teacher") {
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
    } else if (user_type === "Student") {
      try {
        const body = { user_type, name, email, password, level };
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
    }
  };

  const onLoginClick = async () => {
    
  };

  const signUp_s = (
    <Fragment>
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
        value={email}
      ></input>
      <br></br>
      <br></br>
      <label>Class</label>
      <br></br>
      <input
        type="text"
        placeholder="Enter your class"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
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
      <input
        type="password"
        placeholder="Re enter your password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={Confirm_password}
      ></input>
      <br></br>
      <br></br>
      <button onClick={onSignUpClick}>Sign Up</button>
    </Fragment>
  );
  const signUp_t = (
    <Fragment>
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
        value={email}
      ></input>
      <br></br>
      <br></br>
      <label>Educational Qualification</label>
      <br></br>
      <input
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
      <input
        type="password"
        placeholder="Re enter your password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={Confirm_password}
      ></input>
      <br></br>
      <br></br>
      <button onClick={onSignUpClick}>Sign Up</button>
    </Fragment>
  );

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
            {/* <input 
                type="text"
                placeholder="Teacher/Student"
                onChange={(e) => setUserType(e.target.value)}
                value={user_type}
                ></input> */}
            <label>
              <input
                type="radio"
                name="userType"
                value="teacher"
                onChange={() => setUserType("Teacher")}
              />
              Teacher&nbsp;&nbsp;
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                onChange={() => setUserType("Student")}
              />
              Student
            </label>
            <br></br>
            <br></br>
            {user_type === "Teacher" && signUp_t}
            {user_type === "Student" && signUp_s}
          </form>
          <br></br>
          <br></br>
          <p>
            Already have an account?&nbsp;&nbsp;
            <b>
              <button onClick={onLoginClick}>Login</button>
            </b>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
