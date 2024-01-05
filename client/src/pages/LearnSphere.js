import { Link } from "react-router-dom";

import classes from "./LearnSphere.module.css";

function LearnSphere() {
  return (
    <div className={classes.all}>
      <h1>Welcome To LearnSphere!!</h1>
      <h3>Connect, Learn, and Grow</h3>
      <img
        src={process.env.PUBLIC_URL + "/images/Homepage.jpg"}
        alt="E-Learning platform"
      />
      <nav>
        <Link to="/signup">signup for more</Link>
      </nav>
    </div>
  );
}

export default LearnSphere;
