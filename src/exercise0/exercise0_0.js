import * as React from "react";
import * as ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your component
root.render(
  <p>
    Hello, <strong>JSX</strong>
  </p>
);

function zerozero()
{
  return(
    <div id="root"></div>
  )
}

export default zerozero
