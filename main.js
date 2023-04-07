// 1. Slide Show + AutoSlide

let slideWrapper = document.querySelector("#testimonials"),
    slides = document.querySelector(".testimonials_testimonial"),
    slide = document.querySelectorAll(".testimonial"),
    slideCount = slide.length,
    currentIdx = 0,
    slideWidth = ((slideWrapper.getBoundingClientRect().width)*0.3),
    slideMargin = ((slideWrapper.getBoundingClientRect().width)-slideWidth*3)/2,
    slideHeight = slide[0].getBoundingClientRect().height,
    slideBtn = document.querySelectorAll('.testimonials__btns button'),
    cloneBefore,
    cloneAfter;

    console.log(slideWidth);
    console.log(slideMargin);

function makeingClone() {
    cloneAfter = slide[slideCount-1].cloneNode("true");
    cloneAfter.className += " firstClone";

    cloneBefore = slide[0].cloneNode("true");
    cloneBefore.className += " lastClone";

    slides.prepend(cloneAfter);
    slides.appendChild(cloneBefore);
};

makeingClone();

let newslide = document.querySelectorAll(".testimonial");
let newslideCount = newslide.length;

function floatLeft() {
    

    console.log(newslide);
    for(let i=0; i<newslideCount; i++) {
        newslide[i].style.left = i * (slideWidth+slideMargin) + 'px';
    }
}
floatLeft();

function gotoSlide(idx) {
    slides.style.left = -idx * (slideWidth+slideMargin) + 'px';
    currentIdx = idx;
}

gotoSlide(0);

for(let i=0; i<slideCount; i++) {
    slideBtn[i].addEventListener('click',(ev) => {
        for(let j=0; j<slideCount; j++) {
            slideBtn[j].classList.remove('colored');
        }
        gotoSlide(ev.target.dataset.number-1);
        slideBtn[ev.target.dataset.number-1].classList.add('colored');
       
    })
}
