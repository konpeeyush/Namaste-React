import React from "react";
import ReactDOM from "react-dom/client";


// * Nested Header Element using React.createElement
const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", null, "H1 Element using React.createElement"),
  React.createElement("h2", null, "H2 Element using React.createElement"),
  React.createElement("h3", null, "H3 Element using React.createElement"),
]);

const headingJsx = (
  <div className="title">
    <h1>H1 Element using JSX</h1>
    <h2>H2 Element using JSX</h2>
    <h3>H3 Element using JSX</h3>
  </div>
);

const HeadingComponent = () => {
  return (
    <div className="title">
      <h1>H1 Element using Component</h1>
      <h2>H2 Element using Component</h2>
      <h3>H3 Element using Component</h3>
    </div>
  );
};

const NavbarComponent = () => {
  return (
   <ul className="navbar">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
   </ul>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<NavbarComponent />, heading, headingJsx, <HeadingComponent />]);
