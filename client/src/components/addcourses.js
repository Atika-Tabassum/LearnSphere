import React, { Fragment, useState } from "react";
import "./homepage.css";

const AddCourses = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course_class, setClass] = useState("");
  const [course_fee, setCourseFee] = useState("");
  const [teacher_id, setTeacherId] = useState("");

  const onSignUpClick = async () => {
    try {
      const body = {name, description, course_class, course_fee, teacher_id};
      
      const response = await fetch("http://localhost:3001/addcourse", {
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
      <h1 className="text-center">Welcome To LearnSphere!!</h1>
      <h3 className="text-center">Add Course</h3>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <div class="main">
        <div class="signup">
            <form id="register">
               <label>Name of the Course</label>
               <br></br>
               <input 
                type="text"
                placeholder="Enter Course Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
                <label>Description</label>
                <br></br>
                <input 
                type="text"
                placeholder="Write Shortly about the Course"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                ></input>
                <br></br>
                <br></br>
                <label>Class</label>
                <br></br>
                <input 
                type="text"
                placeholder="Enter CLass" 
                onChange={(e) => setClass(e.target.value)}
                value={course_class}></input>
                <br></br>
                <br></br>
                <label>Course Fee</label>
                <br></br>
                <input 
                type="number"
                placeholder="Enter Course Fee" 
                onChange={(e) => setCourseFee(e.target.value)}
                value={course_fee}></input>
                <br></br>
                <br></br>
                <label>Teacher Id</label>
                <br></br>
                <input 
                type="number"
                placeholder="Enter your id" 
                onChange={(e) => setTeacherId(e.target.value)}
                value={teacher_id}></input>
                <br></br>
                <br></br>
                <button onClick={onSignUpClick}>Add Course</button>
            </form>
            <br></br>
            <br></br>
            <p>Back to Homepae &nbsp;&nbsp;
            <b><a href="http://localhost:3001/signup">Yes</a></b></p>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCourses;














