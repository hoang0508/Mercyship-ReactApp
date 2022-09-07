import defaultImg from "../../src/assets/images/pdf-image.jpg";

export default function onErrorImg(e) {
  e.target.src = defaultImg;
  e.target.style.objectFit = "contain";
  //e.target.style.transform = "scale(0.5)";
}
