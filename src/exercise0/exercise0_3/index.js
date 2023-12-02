import * as React from "react";
import * as ReactDom from "react-dom";

import Mysection from "./MySection";
import MyButton from "./MyButton";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Mysection>
    <MyButton>My Button Text</MyButton>
  </Mysection>
);

function index() {
  return (
    <div id="root">
      
    </div>
  )
}

export default index
