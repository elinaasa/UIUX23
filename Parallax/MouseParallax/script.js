window.addEventListener("scroll", function (event) {
  var top = this.pageYOffset;
  console.log(top);

  var layers = document.querySelectorAll('[data-type="parallax"]');
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    var yPos = -((top * speed) / 100);
    layer.setAttribute(
      "style",
      //   tranlateY(yPos + 'px')
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
});

const mouseparallax = document.querySelector(".mouseparallax");
const mouseleft = document.querySelector(".mouse");
const mousecenter = document.querySelector(".mouse-center");
const pilvi1 = document.querySelector(".pilvi1");
const pilvi2 = document.querySelector(".pilvi2");
const pilvi3 = document.querySelector(".pilvi3");

document.addEventListener("mousemove", (evt) => {
  let cx = mouseparallax.clientWidth / 2;
  let cy = mouseparallax.clientHeight / 2;

  let mouseX = evt.clientX;
  let mouseY = evt.clientY;

  let mousepos = `Vasemmasta yläkulmasta <br> x: ${mouseX}, ja y: ${mouseY}`;
  mouseleft.innerHTML = mousepos;

  // keskipisteen ja hiiren välinen ero pikseleissä

  let fromCenterX = cx - mouseX;
  let fromCenterY = cy - mouseY;

  let mousecenterpos = `Keskipisteestä <br> x: ${fromCenterX}, ja y: ${fromCenterY}`;
  mousecenter.innerHTML = mousecenterpos;

  pilvi1.style.transform =
    "translateX(" +
    fromCenterX / 100 +
    "%) translateY(" +
    fromCenterY / 80 +
    "%)";

  pilvi2.style.transform =
    "translateX(" +
    fromCenterX / 50 +
    "%) translateY(" +
    fromCenterY / 30 +
    "%)";

  pilvi3.style.transform =
    "translateX(" +
    fromCenterX / 20 +
    "%) translateY(" +
    fromCenterY / 10 +
    "%)";
});
