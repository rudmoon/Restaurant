// 1. Slide Show + AutoSlide

function slideShow() {
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

}
function moveSlide(idx) {
    activateSlide(idx);
    stopAutoslide();
    startAutoslide();
}

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
    autoSlide = setInterval(slideFunc, 2000);
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
}





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

// 4. Header section 홈페이지 load되면? or scrolly가 도착하면(난 이걸로 함) load 되는것
function appearNav() {
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
}


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
function appearAbout() {
    const aboutSection = document.querySelector("#about");
    const aboutDescription = document.querySelector('.about__description');
    const aboutImg = document.querySelectorAll('.aboutImg');
    const toFifteen = document.querySelector('.first__left');
    const toFifty = document.querySelector('.second__left');

-

window.addEventListener('scroll',() => {
    if(window.scrollY>aboutSection.getBoundingClientRect().top) {
        aboutDescription.classList.add('show');
        for(let i=0; i<aboutImg.length; i++) {
            aboutImg[i].classList.add('show');
        }  
        
        
    }
});
window.onload = () => {
    let i = 1;
    let j = 1;

    let interval1 = setInterval(() => {
        toFifteen.innerHTML = i;
        i++;
        if (i > 15) {
            clearInterval(interval1);
        }
    }, 200);
    let interval2 = setInterval(() => {
        toFifty.innerHTML = j;
        j++;
        if (j > 50) {
            clearInterval(interval2);
        }
    }, 50);
}
}



// 7. appearFood(), 각각 class부여해서 breakfast,launch,dinner나누기)

function appearFood() {

    const foodsSection = document.querySelector('#foods');
    const foodtitleContainer = document.querySelector('.foods__titleContainer');
    const foodSubtitle = document.querySelector('.foods__subtitle');
    const foodBtnsdiv = document.querySelector('.foods__collections');
    const foodsCointainer = document.querySelector('.foods_choicesContainer');
    const foodBtns = document.querySelectorAll('.collection');
    const choice = document.querySelectorAll('.choice');

    window.addEventListener('scroll',() => {
        if(window.scrollY>foodsSection.getBoundingClientRect().top) {
            foodtitleContainer.classList.add('show');
            foodSubtitle.classList.add('show');
            foodBtnsdiv.classList.add('show');
            foodsCointainer.classList.add('show');
        }
    })

    for(let i=0; i<foodBtns.length; i++) {
        foodBtns[i].addEventListener('click', (ev) => {    
            for(let k = 0; k < foodBtns.length; k++) {
                if(k === i) {
                    foodBtns[k].style.borderBottom = "3px solid orange";
                } else {
                    foodBtns[k].style.borderBottom = "1px solid gray";
                }
            }
            
            // console.log(ev.currentTarget);
            for(let j=0; j<choice.length; j++) {
                choice[j].classList.remove('show');
                if(ev.currentTarget.dataset.type === choice[j].dataset.type) {
                choice[j].classList.add('show');              
                }
            }            
        });
    }
    for(let i=0; i<foodBtns.length; i++) {
        foodBtns[i].addEventListener('click', (ev) => {
            ev.currentTarget.style.opacity = 1;
        })
    }   
}


// 8. appearReservation()
function appearReservation() {
    const reservationSection = document.querySelector('#reservation');

    window.addEventListener('scroll', () => {
        if(window.scrollY>reservationSection.getBoundingClientRect().top) {
            reservationSection.classList.add('show');
        }
    })

}

// 9. 구성이 맞지않아, about/service/menu에만 구현하였음.
function gototArea() {
    const navMenus = document.querySelectorAll('.menu');
    const fixednavMenus = document.querySelectorAll('.fixedNavnav__menus li');
    const aboutSection = document.querySelector("#about");
    const serviceSection = document.querySelector('#services');
    const foodSection = document.querySelector('#foods');
    let sections1 = [aboutSection, serviceSection, foodSection];

    for(let i=1; i<=3; i++) {
        navMenus[i].addEventListener('click', (ev) => {
            ev.preventDefault();
            window.scroll({
                top : sections1[i-1].getBoundingClientRect().top+window.scrollY,
                left : 0,
                behavior : 'smooth',
            })
        });
    }
    for(let j=1; j<=3; j++) {
        fixednavMenus[j].addEventListener('click', (event) => {
            event.preventDefault();
            window.scroll({
                top : sections1[j-1].getBoundingClientRect().top+window.scrollY,
                left : 0,
                behavior : 'smooth',
            })
        })
    }
}


function init() {
    gototArea();
    slideShow();
    gotoTopArrow();
    navbarFixed();
    appearServicesection();
    appearNav();
    appearAbout();
    appearFood();
    appearReservation();
}

init();