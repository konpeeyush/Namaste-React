import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("p",{id:"grandchild1"},"Image Optimization, minification, bundling, compressing, consistent hashing, code splitting, differential bundling, diagnostic, error handling, ssl access, tree shaking algorithm, different dev and prod builds, browserslist"),
        React.createElement("p",{id:"grandchild2"},"File Watching Algo - in c++")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("p",{id:"grandchild3"},"Caching"),
        React.createElement("p",{id:"grandchild4"},"Hot module replacement")
    ])
]);

const rootElement = document.getElementById("root");
ReactDOM.render(parent, rootElement);