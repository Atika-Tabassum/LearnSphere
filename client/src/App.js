import React, { Fragment } from "react";
import "./App.css";

// Import the Homepage component from its file
import Homepage from "./components/homepage";
import UserProfile from "./components/userprofile";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Homepage />
      </div>
    </Fragment>
  );
}

export default App;
