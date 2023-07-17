import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🔥"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX
const jsxHeading = (
  <h1 tabIndex="5" className="jsxHeading">
    Namaste React using JSX 🔥
  </h1>
);


const TitleComponent = () => {
  return <h1>Functional Component Title</h1>;
};

//  React Component
// ? There are two types of components
// * 1. Functional Component - NEW
// * 2. Class Based Component - OLD

const HeadingComponent = () => {
  return (
    <>
      {/* // * Component Composition  */}

      {/* //* Element rendering in component */}
      {heading}
      <TitleComponent />
      <h2>Functional Component</h2>
    </>
  );
};


console.log(HeadingComponent)
console.log(heading);
console.log(jsxHeading);


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const name = 'John';

// Using {Component}
const element1 = <Welcome name={name} />;

// Using <Component/>
const element2 = <Welcome name={name} />;

// Using <Component></Component>
const element3 = <Welcome name={name}>Extra Content</Welcome>;


root.render([element1, element2, element3]);
