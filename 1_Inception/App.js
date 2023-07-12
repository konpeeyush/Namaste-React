{/* <div id="parent">
    <div id="child">
        <h1>Im a child</h1>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            null,
            "Im a child"
        ),
        React.createElement(
            "p",
            null,
            "Im a second child"
        )
        ]
    )
);

console.log(parent)

const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);