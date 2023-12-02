import React from "react";
import ReactDOM from "react-dom";

function Exercise4_6() {
  const styleExercise = {
    fontSize: "15px",
    backgroundColor: "#d0f0c0",
    border: "1px solid green",
    padding: "10px",
  };

  return (
    <div id="root" style={styleExercise}>
      Green is the prime color of the world
    </div>
  );
}

ReactDOM.render(<Exercise4_6 />, document.getElementById("root"));

export default Exercise4_6;
