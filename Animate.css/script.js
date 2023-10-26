const element = document.getElementById("eka");
const element2 = document.getElementById("toka");
const element3 = document.getElementById("kolmas");
const element4 = document.getElementById("neljäs");
const element5 = document.getElementById("viides");
const element6 = document.getElementById("kuudes");

// Function to add a specific animation class to a specific element
function addAnimationClass(element, animationClass) {
  element.classList.add("animate__animated", animationClass);
}

// Function to remove animation class from a specific element
function removeAnimationClass(element, animationClass) {
  element.classList.remove("animate__animated", animationClass);
}

// click event listeners to each element with different animations
element.addEventListener("click", function () {
  const animationClass = "animate__bounce";
  addAnimationClass(element, animationClass);
  setTimeout(function () {
    removeAnimationClass(element, animationClass);
  }, 1000);
});

element2.addEventListener("click", function () {
  const animationClass = "animate__swing";
  addAnimationClass(element2, animationClass);
  setTimeout(function () {
    removeAnimationClass(element2, animationClass);
  }, 1000);
});

element3.addEventListener("click", function () {
  const animationClass = "animate__wobble";
  addAnimationClass(element3, animationClass);
  setTimeout(function () {
    removeAnimationClass(element3, animationClass);
  }, 1000);
});

element4.addEventListener("click", function () {
  const animationClass = "animate__heartBeat";
  addAnimationClass(element4, animationClass);
  setTimeout(function () {
    removeAnimationClass(element4, animationClass);
  }, 1000);
});

element5.addEventListener("click", function () {
  const animationClass = "animate__rubberBand";
  addAnimationClass(element5, animationClass);
  setTimeout(function () {
    removeAnimationClass(element5, animationClass);
  }, 1000);
});

element6.addEventListener("click", function () {
  const animationClass = "animate__backOutRight";
  addAnimationClass(element6, animationClass);
  setTimeout(function () {
    removeAnimationClass(element6, animationClass);
  }, 1000);
});
