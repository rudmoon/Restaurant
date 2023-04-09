// 1. Slide Show + AutoSlide

let slideWrapper = document.querySelector("#testimonials"),
    slides = document.querySelector(".testimonials_testimonial"),
    slide = document.querySelectorAll(".testimonial"),
    slidei = document.querySelectorAll(".testimonial>i"),
    slidesay = document.querySelectorAll(".testimonal__saying"),
    slideinf = document.querySelectorAll(".client__information--name"),
    slideprof = document.querySelectorAll(".client__information--profession"),
    slideCount = slide.length,
    currentIdx = 0,
    slideWidth = ((slideWrapper.getBoundingClientRect().width)*0.3),
    slideMargin = ((slideWrapper.getBoundingClientRect().width)-slideWidth*3)/2,
    slideBtn = document.querySelectorAll('.testimonials__btns button'),
    cloneBefore,
    cloneAfter;


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
    for(let i=0; i<slideCount; i++) {
        slideBtn[i].classList.remove("colored");
        slide[i].classList.remove("colored");
        slidei[i].classList.remove("colored");
        slidesay[i].classList.remove("colored");
        slideinf[i].classList.remove("colored");
        slideprof[i].classList.remove("colored");
    }
    slideBtn[currentIdx].classList.add('colored');
    slide[currentIdx].classList.add('colored');
    slidei[currentIdx].classList.add('colored');
    slidesay[currentIdx].classList.add('colored');
    slideinf[currentIdx].classList.add('colored');
    slideprof[currentIdx].classList.add('colored');    
    // idx++;
    // if(currentIdx>slideCount) {
    //     currentIdx = 0;
    // }
}
function moveSlide(idx) {
    activateSlide(idx);
    stopAutoslide();
    startAutoslide();
}

// gotoslide func에 잡다한 부분 다 넣고, slideBtn[i].addEventListener('click',(ev) 이부분을 gotoslide(ev.target 이런식으로)
for(let i=0; i<slideCount; i++) { 
    slideBtn[i].addEventListener("click", (ev) => {
        gotoSlide(ev.target.dataset.number - 1);
    });
}


function gotoSlideZero() {
    gotoSlide(0);
    slideBtn[0].classList.add("colored");
    slide[0].classList.add("colored");
    slidei[0].classList.add("colored");
    slidesay[0].classList.add("colored");
    slideinf[0].classList.add("colored");
    slideprof[0].classList.add("colored");   
}

gotoSlideZero();

    let autoSlide;

    function startAutoslide() {
        autoSlide = setInterval(slideFunc,2000);
    }

    function stopAutoslide() {
        clearInterval(autoSlide);
    }

    function slideFunc() {
        currentIdx++;
        if (currentIdx >= slideCount) {
            currentIdx = 0;
        }
        gotoSlide(currentIdx);
    }
    // window.addEventListener("load", startAutoslide);
    slideWrapper.addEventListener("mouseleave", startAutoslide);
    slideWrapper.addEventListener("mouseenter", stopAutoslide);

