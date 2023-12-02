import React from "react";
import * as ReactDOM from "react-dom";

function showAlert() {
  alert("Alert!!!");
}

const element = (
  <div>
    <button style={{ margin: "10px 10px" }} onClick={showAlert}>
      Alert me!
    </button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);

function exercise4_2() {
  return (
    <div id="root"></div>
  )
}

export default exercise4_2;
