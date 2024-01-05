import React, { Fragment } from "react";

//installed react router dom
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Import the Homepage component from its file
import LearnSphere from "./pages/LearnSphere";
import Signup from "./pages/signup/signup";
import UserProfile from "./pages/login/userprofile";
import Login from "./pages/login/login";
import TeacherSignUp from "./pages/signup/teacherSignup";
import StudentSignUp from "./pages/signup/studentSignUp";
import Exam from "./components/Quiz";
import Homepage from "./components/homepage";
import Quiz from "./components/Quiz";
import Courses from "./pages/Courses-section/Courses";
import AddCourse from "./components/addcourses";
import AllCourses from "./components/allcourses";

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
          <Route path="/allcourses" element={<AllCourses/>} />
          <Route path="/addcourse" element={<AddCourse/>} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;







