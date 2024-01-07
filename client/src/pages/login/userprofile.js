import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./userprofile.module.css";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mydata, setMyData] = useState([]);
  const { userId } = useParams();
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const view_courses_t = () => {
    navigate(`/${userId}/view_courses_as_teacher`,{replace:true});
  };
  const view_courses_s = () => {};

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/view/${userId}/myprofile`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setMyData(data.data);
          setUserType(data.data[0].user_type); // Assuming user_type is the same for all records
        } else {
          console.error("Received data is not an array:", data);
        }
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log("Error received:", err);
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>My Profile</h1>
      <br />
      {mydata.map((user) => (
        <div key={user.id} className={classes.format}>
          <p>
            <b>Name:</b>
            {user.name}
          </p>
          <p>
            <b>Email:</b>
            {user.email}
          </p>
          <p>
            <b>Role:</b>
            {user.user_type}
          </p>
          {user.user_type === "Teacher" ? (
            <button onClick={view_courses_t}>View Your Taught Courses</button>
          ) : (
            <button onClick={view_courses_s}>View Your Enrolled Courses</button>
          )}
        </div>
      ))}
    </section>
  );
};

export default UserProfile;
