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
