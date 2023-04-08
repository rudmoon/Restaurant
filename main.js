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
    // idx++;
    // if(currentIdx>slideCount) {
    //     currentIdx = 0;
    // }
}

// gotoslide func에 잡다한 부분 다 넣고, slideBtn[i].addEventListener('click',(ev) 이부분을 gotoslide(ev.target 이런식으로)
for(let i=0; i<slideCount; i++) { 
    slideBtn[i].addEventListener('click',(ev) => {
        for(let j=0; j<slideCount; j++) {
            slideBtn[j].classList.remove('colored');
            slide[j].classList.remove('colored');
            slidei[j].classList.remove('colored');
            slidesay[j].classList.remove('colored');
            slideinf[j].classList.remove('colored');
            slideprof[j].classList.remove('colored');
        }
        gotoSlide(ev.target.dataset.number-1);
        slideBtn[ev.target.dataset.number-1].classList.add('colored');
        slide[ev.target.dataset.number-1].classList.add('colored');
        slidei[ev.target.dataset.number-1].classList.add('colored');
        slidesay[ev.target.dataset.number-1].classList.add('colored');
        slideinf[ev.target.dataset.number-1].classList.add('colored');
        slideprof[ev.target.dataset.number-1].classList.add('colored');
    })
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

    startAutoslide();

