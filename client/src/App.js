import React, { Fragment } from "react";

//installed react router dom
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import the Homepage component from its file
import LearnSphere from "./pages/LearnSphere";
import Signup from "./pages/signup/signup";
import UserProfile from "./pages/userprofile";
import Login from "./pages/login";
import TeacherSignUp from "./pages/signup/teacherSignup";
import StudentSignUp from "./pages/signup/studentSignUp";
import Exam from "./components/Quiz";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Routes>
          <Route path="/" element={<LearnSphere />} />
          <Route path="/myprofile" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup_teacher" element={<TeacherSignUp />} />
          <Route path="/signup_student" element={<StudentSignUp />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
