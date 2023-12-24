var slider = document.querySelector(".js--slider");

var slider_slides = slider.querySelectorAll(".slider-item");

var slider_controls = slider.querySelectorAll(".slider-control");

var slider_prev = slider.querySelector(".slider-prev");

var slider_next = slider.querySelector(".slider-next");

var slider_start = 0;

slider_prev.addEventListener("click", shiftSlide.bind(slider_prev, "prev"));
slider_next.addEventListener("click", shiftSlide.bind(slider_next, "next"));

function shiftSlide(direction) {
    var currentSlideId = slider_start;
    var lastSlideIndex = slider_controls.length - 1;
    var id;

    if (direction === "prev") {
        if (currentSlideId > 0) {
            id = currentSlideId - 1;
        } else {
            id = lastSlideIndex;
        }
    }
    if (direction === "next") {
        if (currentSlideId !== lastSlideIndex) {
            id = currentSlideId + 1;
        } else {
            id = 0;
        }
    }
    changeSlide(id);
}



for (var i = 0; i < slider_controls.length; i++) {
    slider_controls[i].addEventListener("click", changeSlide.bind(slider_controls[i], i));
}



function changeSlide(id) {
    event.preventDefault();
    for (var i = 0; i < slider_slides.length; i++) {
        slider_slides[i].classList.remove("active");
        slider_controls[i].classList.remove("active");
    }
    slider_slides[id].classList.add("active");
    slider_controls[id].classList.add("active");
    slider_start = id;
}
