import React, { Fragment } from "react";
import "./App.css";

// Import the Homepage component from its file
import Homepage from "./components/homepage";
import UserProfile from "./components/userprofile";
import Quiz from "./components/Quiz";
import Courses from "./components/Courses-section/Courses";
import AddCourses from "./components/addcourses";
import AllCourses from "./components/allcourses";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AllCourses />
      </div>
    </Fragment>
  );
}

export default App;







