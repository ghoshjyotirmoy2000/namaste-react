// nested structure of recat
const parent = React.createElement(  
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { key: "child1" , id: "child1" },
        [
            React.createElement("h1", { key : "h1", className: "tag" }, "I am a h1 tag"),
            React.createElement("h2", { key : "h2", className: "tag" }, "I am a h2 tag")
        ]      
      ),
      React.createElement(
        "div",
        { key: "child2" , id: "child2" },
        [
            React.createElement("h1", { key : "h1", className: "tag" }, "I am a h1 tag"),
            React.createElement("h2", { key : "h2", className: "tag" }, "I am a h2 tag")
        ]      
      )
  ]
);

// creating element using react
const heading = React.createElement(    
  "h1",
  { id: "heading" },
  "Hello world form react"
);

console.log(heading); // important

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
