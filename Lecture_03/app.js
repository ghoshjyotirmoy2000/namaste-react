import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX => HTML like or XML like syntax (transpiled brfore reaching JS engine) - through PARCEL using BABEL

// JSX => React.createElement => React Element ( JS Object) => HTML Element (after being rendered)

const JSXheading = <h1 className="heading"> Hello World using JSX</h1>; // this is also an object

// React Functional Components

const Title = () => {
  return <h1 className="title">This is a title from react component</h1>;
};  // react component

const elem = <span>This is a react element</span>; // react element

const title = (
  <div>
    {elem}
    <h1>This is a title from react element</h1>
  </div>
);  // react element

// Component Composition
const Headingcomponent = () => {
  return (
    <div>
      <Title />  // as a compoennt
      {Title()}  //normal function call
      <h1 className="heading">This is a React Component</h1>
      {title}
    </div>
  );
}; // react component

console.log(JSXheading);

root.render(<Headingcomponent />);
