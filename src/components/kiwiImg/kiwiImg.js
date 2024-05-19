import Kiwi from "./kiwi.jpg";
import "./kiwi-img.scss";
export default class KiwiImg {
  render() {
    const img = document.createElement("img");
    img.src = Kiwi;
    img.alt = "kiwi-image";
    img.classList.add("kiwi-image");
    document.body.appendChild(img);
  }
}
