import HelloWorld from "./components/helloWorld/helloWorld";
import Heading from "./components/heading/heading";
// import addImage from "./addImage";
import _ from "lodash";
const heading = new Heading();
heading.render(_.upperFirst("hello world"));
const helloWorldObj = new HelloWorld();
helloWorldObj.render();
// addImage();
if (process.env.NODE_ENV === "production") console.log("PROD");
else if (process.env.NODE_ENV === "development") console.log("DEV");

helloWorldObj.methodThatDoesntExist();
