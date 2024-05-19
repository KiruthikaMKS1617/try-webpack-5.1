import KiwiImg from "./components/kiwiImg/kiwiImg";
import Heading from "./components/heading/heading";
// import addImage from "./addImage";
import _ from "lodash";
const heading = new Heading();
heading.render(_.upperFirst("kiwi"));
const kiwiImg = new KiwiImg();
kiwiImg.render();
