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


// 2. Scrolltop시, fixed된 navbar display :none, 그 이하시 보이게(width는 100%)

function navbarFixed() {
    const navbarHidden = document.querySelector('.fixedNav');

    window.addEventListener('scroll', () => {
    if(window.scrollY>100) {
        navbarHidden.classList.add('show');
    } else {
        navbarHidden.classList.remove('show');
    }
});
};

navbarFixed();

// 3. ArrowtotheTop
function gotoTopArrow() {
    const gototopArrow = document.querySelector('#gotoTop');
let serviceSection = document.querySelector('#services');
    window.addEventListener('scroll', (ev) => {
        ev.preventDefault();
        if(window.scrollY>serviceSection.getBoundingClientRect().height) {
            gototopArrow.classList.add('show');
        } else {
            gototopArrow.classList.remove('show');
        }
    });

    gototopArrow.addEventListener('click',(ev) => {
        ev.preventDefault();
        window.scroll({
            top : 0,
            behavior : 'smooth',
        })
    })
};

gotoTopArrow();

// 4. Header section 홈페이지 load되면? or scrolly가 도착하면(난 이걸로 함) load 되는것
const navSection = document.querySelector('#nav');
const navLogo = document.querySelector('.nav__logo');
const navMenus = document.querySelector('.nav__menus');
const headerleftTitle = document.querySelector('.leftContent__title');
const headerlefScript = document.querySelector('.leftContent__script');
const headerleftBtn = document.querySelector('.leftContent__bookBtn');

window.addEventListener('load', () => {
    navLogo.classList.add('show');
    navMenus.classList.add('show');
    headerleftTitle.classList.add('show');
    headerlefScript.classList.add('show');
    headerleftBtn.classList.add('show');
})

// 5. Service section 부분, scroll이 어느정도(serviceSection에 도달했을 떄로 하자) 내려왔을 때 하나씩 등장
function appearServicesection() {
    const headerSection = document.querySelector('#header');
    const serviceSection = document.querySelector('#services');
    const service = document.querySelectorAll('.service');

    window.addEventListener('scroll',() => {
        if(window.scrollY >= serviceSection.getBoundingClientRect().top - 700) {
            for(let i=0; i<service.length; i++) {
                service[i].classList.add('appear');
            }
        }
    })
}
appearServicesection();

// 6. About section 사진부터, 다음 description 부분
function appearAboutimg() {
    const aboutSection = document.querySelector("#about");
    const aboutDescription = document.querySelector('.about__description');
    const aboutImg = document.querySelectorAll('.aboutImg');
    const toFifteen = document.querySelector('.first__left').textContent;
    const toFifty = document.querySelector('.second__left').textContent;



window.addEventListener('scroll',() => {
    if(window.scrollY>aboutSection.getBoundingClientRect().top) {
        aboutDescription.classList.add('show');
        for(let i=0; i<aboutImg.length; i++) {
            aboutImg[i].classList.add('show');
        }      
    }
});
}

appearAboutimg();

// 7. 



