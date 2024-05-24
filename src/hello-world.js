import HelloWorld from "./components/helloWorld/helloWorld";
import Heading from "./components/heading/heading";
// import addImage from "./addImage";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Component = () => {
  const [first, setfirst] = useState("x");
  return <h1>{first}</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
const heading = new Heading();
heading.render("hello world" + first);
const helloWorldObj = new HelloWorld();
helloWorldObj.render();
// addImage();
if (process.env.NODE_ENV === "production") console.log("PROD");
else if (process.env.NODE_ENV === "development") console.log("DEV");

helloWorldObj.methodThatDoesntExist();
