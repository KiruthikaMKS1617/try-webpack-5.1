import fruitsBasket from "./fruits-basket.png";
import kiwi from "./kiwi.jpg";

function addImage() {
  const body = document.querySelector("body");
  const img1 = document.createElement("img");
  img1.alt = "fruitsBasket";
  img1.width = 300;
  img1.src = fruitsBasket;

  body.appendChild(img1);
  const img2 = document.createElement("img");
  img2.alt = "kiwi";
  img2.width = 300;
  img2.src = kiwi;
  body.appendChild(img2);
  //   img.alt = "fruits-basket";
  //   img.width = "300px";
  //   img.src = fruitsBasket;
  //   document.body.appendChild(img);
}

export default addImage;
