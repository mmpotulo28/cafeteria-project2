const sliderObject = {
  sliders: document.querySelector("#menu-slider"),
  slides: document.querySelectorAll(".slider-block"),
  speed: 1,
};

const updatesObject = {
  updateContainer: document.querySelector(".update-cont"),
  updateMsgs: document.querySelectorAll(".update-msg"),
  speed: 2,
};

function setSlides() {
  sliderObject.slides[0].style.backgroundColor = "lightgrey";
  sliderObject.slides[1].style.backgroundColor = "lightgreen";
  sliderObject.slides[2].style.backgroundColor = "orange";
}

setSlides();

function animateSliders(container, elements, speed) {
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

animateSliders(updatesObject.updateContainer, updatesObject.updateMsgs, updatesObject.speed);
