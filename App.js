import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React !!!"
);
*/
//createElement ==>  h1 => tag name, {} => tag attribute, "_______" => children / content
const root = ReactDOM.createRoot(document.getElementById("root"));
//root1.render(heading1);

/**
 *
 * <div id="parent">
 *   <div id="child1">
 *     <h1>Im h1 tag</h1>
 *     <h2>Im h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>Im h1 tag</h1>
 *     <h2>Im h2 tag</h2>
 *   </div>
 * </div>
 *
 */

/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "This is coming from react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
]);
*/

// functional component
const Parent = () => (
  <>
    <div id="child1">
      <h1>Im h1 tag</h1>
      <h1>This is coming from react</h1>
    </div>
    <div id="child2">
      <h1>Im h1 tag</h1>
      <h2>Im h2 tag</h2>
    </div>
  </>
);

// component composition
const HeadingComponent = () => {
  return (
    <>
      <Parent />
      <h1>Namaste React Functional Component</h1>
    </>
  );
};

root.render(<HeadingComponent />);
