// import React, { Fragment, useEffect, useState } from "react";

// const AllCourses = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setloading] = useState(true);
//     useEffect(() => {//fetch by default get
//         setloading(true);
//         fetch("http://api.github.com/users")
//         //fetch("http://localhost:3001/allcourse")
//         .then((res) => res.json())
//         .then((data) => setUsers(data))
//         .then(() => setloading(false))
//         .catch((err) => console.log("Error received", err));

//     }, []);

//     console.log(users);

//     return (
//     <section>
//         {loading && <div>loading...</div>}
//             {users.map((user) => (
//                 <div>{user.login}</div>
//             ))}
//      </section>
//     );
    
// };

// export default AllCourses;






import React, { useEffect, useState } from "react";
import "./allcourses.css";


const AllCourses = () => {
    const [users, setUsers] = useState([]); // Ensure initial state is an array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:3001/allcourse")
            .then((res) => res.json())
            .then((data) => {
                // Ensure data is an array before setting the state
                if (Array.isArray(data.data)) {
                    setUsers(data.data);
                } else {
                    console.error("Received data is not an array:", data);
                }
            })
            .then(() => setLoading(false))
            .catch((err) => {
                console.log("Error received:", err);
                setLoading(false);
            });

    }, []);

    console.log(users);

    return (
        <section>
            {loading && <div>Loading...</div>}
            {Array.isArray(users) ? (
                users.map((user) => (
                    <div key={user.id}
                    //     style = {{ display: "flex",
                    //                width: "100%",
                    //                flexWrap: "wrap",
                    //                gap: 4
                    // }}
                    >
                        <h2>{user.name}</h2>
                        <p>{user.description}</p>
                        <p>Class: {user.course_class}</p>
                        <p>Fee: {user.course_fee}</p>
                        <p>Teacher ID: {user.teacher_id}</p>
                    </div>
                ))
            ) : (
                <div>Error loading data</div>
            )}
        </section>
    );
};

export default AllCourses;






