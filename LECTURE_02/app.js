

import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world form react using parcel"
);

console.log(heading); // important

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
