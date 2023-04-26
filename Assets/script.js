// Function to initialize the carousel
function workGirl() {

  var carouselElement = document.getElementById("projectCaption");

  // Get the previous and next buttons
  var prevButton = carouselElement.querySelector(".carousel-control-prev");
  var nextButton = carouselElement.querySelector(".carousel-control-next");

  // Add event listener for previous button
  prevButton.addEventListener("click", function () {
    var activeSlide = carouselElement.querySelector(".carousel-item.active");
    var prevSlide =
      activeSlide.previousElementSibling ||
      activeSlide.parentElement.lastElementChild;
    activeSlide.classList.remove("active");
    prevSlide.classList.add("active");
  });

  // Add event listener for next button
  nextButton.addEventListener("click", function () {
    var activeSlide = carouselElement.querySelector(".carousel-item.active");
    var nextSlide =
      activeSlide.nextElementSibling ||
      activeSlide.parentElement.firstElementChild;
    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
  });
}

workGirl();
