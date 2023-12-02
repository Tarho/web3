import * as React from "react";
import * as ReactDom from "react-dom";

const array = ["First", "Second", "Third"];

const object = {
  first: 1,
  second: 2,
  third: 3,
};
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map((i) => (
        <li key={i}>
          <strong>{i}:</strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>
);

function exercise0_4() {
  return(
    <div id="root"></div>
  )
}

export default exercise0_4
