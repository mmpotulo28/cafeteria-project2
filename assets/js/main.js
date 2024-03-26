import { sliderObject, updatesObject } from "./helpers/dom_elements.js";

const colors = ["green", "pink", "orange", "purple", "lightblue"];
const updates = [
  "tonight we are closing at 18:00",
  "vetkooks are out of stock",
  "Special: score is now R10",
  "Use your Barcode to collect your order",
  "No cash will be accepted for online orders",
];

function setUpdateMessage() {
  updates.forEach((update) => {
    updatesObject.updateContainer.innerHTML += updatesObject.updateMsg(update);
  });
}
setUpdateMessage();

function horizontalAnimation(container, elements, speed) {
  //   calculate the total width of the slides
  let totalWidth = 0;
  elements.forEach((slide) => {
    totalWidth += slide.offsetWidth;
  });

  //   set the initial position of the elements
  let position = 0;
  container.style.transform = `translateX(${position}px)`;

  //   define the animation function
  function animationFn() {
    // move the slider container to the left
    position -= speed;
    elements.forEach((slide) => {
      slide.style.transform = `translateX(${position}px)`;
    });

    // reset position if the container has scrolled past the headlines
    if (position <= -totalWidth) {
      // set the position to the width of the container
      position = container.offsetWidth + container.offsetLeft;
    }

    window.requestAnimationFrame(animationFn);
  }

  animationFn();
}

horizontalAnimation(
  updatesObject.updateContainer,
  updatesObject.updateMsgs(),
  updatesObject.speed
);

// animate sliders
let position = 0;
function setSlides() {
  for (let i in colors) {
    // add slide
    sliderObject.sliders.innerHTML += `
    <div class="slider-block" id="slider${i}">Slider ${i}</div>
    `;

    // add color to slide
    sliderObject.slides = document.querySelectorAll(".slider-block");
    sliderObject.slides[i].style.backgroundColor = colors[i];
  }
}

function animateSliders(_container, elements, speed, direction) {
  //   calculate the total width of the slides
  let totalWidth = 0;
  elements.forEach((slide) => {
    totalWidth += slide.offsetWidth - 1;
  });

  totalWidth -= sliderObject.speed;

  // move the slider container to the left
  if (
    (Math.abs(position) < totalWidth && direction == -1) ||
    (Math.abs(position) > 0 && direction == 1)
  ) {
    position += speed * direction;
    elements.forEach((slide) => {
      slide.style.transform = `translateX(${position}px)`;
    });
  }
}

/***************Monitor Slider clicks ***************/
if (sliderObject.sliders) {
  setSlides();
  sliderObject.speed = sliderObject.slides[0].offsetWidth;
  sliderObject.btnLeft.addEventListener("click", () => {
    animateSliders(
      sliderObject.sliders,
      sliderObject.slides,
      sliderObject.speed,
      1
    );
  });

  sliderObject.btnRight.addEventListener("click", () => {
    animateSliders(
      sliderObject.sliders,
      sliderObject.slides,
      sliderObject.speed,
      -1
    );
  });
}
