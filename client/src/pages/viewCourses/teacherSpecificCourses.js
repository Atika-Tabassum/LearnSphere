import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const View_courses_as_teacher = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mydata, setMyData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://localhost:3001/view_courses/${userId}/courses_teacher_specific`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setMyData(data.data);
        } else {
          console.error("Received data is not an array:", data);
        }
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log("Error received:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <div>
        <h2>Courses Taught</h2>
        {Array.isArray(mydata) ? (
          mydata.map((course) => (
            <div
              key={course.id}>
              <h2>{course.name}</h2>
              <p>{course.description}</p>
              <p>Class: {course.course_class}</p>
              <p>Fee: {course.course_fee}</p>
              <p>Teacher ID: {course.teacher_id}</p>
            </div>
          ))
        ) : (
          <div>Error loading data</div>
        )}
      </div>
    </section>
  );
};

export default View_courses_as_teacher;
