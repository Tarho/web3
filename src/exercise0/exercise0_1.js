import * as React from "react";
import * as ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <div>
    <button></button>
    <code></code>
    <input></input>
    <label></label>
    <p></p>
    <pre></pre>
    <select></select>
    <table></table>
    <ul></ul>
  </div>
);

function exercise0_1() {
  return(
    <div id="root"></div>
  )
}

export default exercise0_1

