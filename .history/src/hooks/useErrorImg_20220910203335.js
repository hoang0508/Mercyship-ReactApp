export default function onErrorImg(e) {
  e.target.src = "/Mercy-default.jpg";
  e.target.style.objectFit = "cover";
  //e.target.style.transform = "scale(0.5)";
}
