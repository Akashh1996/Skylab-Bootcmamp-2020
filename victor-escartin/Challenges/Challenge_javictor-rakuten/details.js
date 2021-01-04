const carouselSlideCast= document.querySelector('.carousel-slide-cast');
const carouselImagesCast= document.querySelectorAll('.carousel-slide-cast a');

const carouselSlideAnother= document.querySelector('.carousel-slide-another');
const carouselImagesAnother= document.querySelectorAll('.carousel-slide-another .img-another');

const prevBtnCast=document.querySelector('#prevBtnCast');
const nextBtnCast=document.querySelector('#nextBtnCast');

const prevBtnAnother=document.querySelector('#prevBtnAnother');
const nextBtnAnother=document.querySelector('#nextBtnAnother');

const searchBtn = document.getElementById('searchBtn');
const closeBtn = document.getElementById('closeBtn');

let windowWidth = window.innerWidth;
let containerCastWidth = document.getElementById('film-i').clientWidth;
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    containerCastWidth = document.getElementById('film-i').clientWidth;
    counterCast = 1;
    carouselSlideCast.style.transform = 'translateX(0px)';
    counterAnother = 1;
    carouselSlideAnother.style.transform = 'translateX(0px)';
});

// Search button

searchBtn.addEventListener('click', () => {
    document.getElementById('searchBox').style.display = 'flex';
    // document.getElementById('searchBox').style.transition = '0.7s ease';
    document.getElementById('search-bar-input-details').autofocus = true;
});

// Close search button

closeBtn.addEventListener('click', () => {
    document.getElementById('searchBox').style.display = 'none';
});

// CAROUSEL CAST

//Counter
let counterCast = 1;
let sizeCast = 0;

//Button Listeners

nextBtnCast.addEventListener('click',() => {
    sizeCast = carouselImagesCast[0].clientWidth;
    let maxWidthCarouselCast = carouselImagesCast.length * sizeCast;

    carouselSlideCast.style.transition = "transform 0.7s ease-in-out";
    carouselSlideCast.style.transform = 'translateX(' + (-sizeCast * counterCast) + 'px)';
    counterCast++;

    if (counterCast > carouselImagesCast.length) {
        counterCast = carouselImagesCast.length;
        carouselSlideCast.style.transform = 'translateX(' + (-(carouselImagesACast.length - 2) * sizeCast) + 'px)';
    }

    if (-sizeCast * counterCast < -maxWidthCarouselCast + containerCastWidth) {
        carouselSlideCast.style.transform = 'translateX(' + (-maxWidthCarouselCast + containerCastWidth * 0.8) + 'px)';
        counterCast--;
    }
});

prevBtnCast.addEventListener('click',()=>{
    sizeCast = carouselImagesCast[0].clientWidth;
    let maxWidthCarouselCast = carouselImagesCast.length * sizeCast;
    
    counterCast--;
    carouselSlideCast.style.transition = "transform 0.7s ease-in-out";
    carouselSlideCast.style.transform = 'translateX(' + (-sizeCast * counterCast) + 'px)';

    if (counterCast <= 1){
        counterCast = 1;
        carouselSlideCast.style.transform = 'translateX(0px)';
    }

    if (-sizeCast * counterCast < -maxWidthCarouselCast + containerCastWidth) {
        carouselSlideCast.style.transform = 'translateX(' + (-maxWidthCarouselCast + containerCastWidth) + 'px)';
    }
});

// CAROUSEL ANOTHER FILMS

//Counter
let counterAnother = 1;
let sizeAnother = 0;

//Button Listeners

nextBtnAnother.addEventListener('click',() => {
    if (windowWidth < 600) {        
        windowWidth = window.innerWidth * 0.90;
    } else if (windowWidth >= 600 && windowWidth < 1000) {
        windowWidth = window.innerWidth * 0.95;
    } else if (windowWidth >= 1000 && windowWidth < 1500) {
        windowWidth = window.innerWidth * 0.99;
    }

    sizeAnother = carouselImagesAnother[0].clientWidth;
    let maxWidthCarouselAnother = carouselImagesAnother.length * sizeAnother;

    carouselSlideAnother.style.transition = "transform 0.7s ease-in-out";
    carouselSlideAnother.style.transform = 'translateX(' + (-sizeAnother * counterAnother) + 'px)';
    counterAnother++;

    if (counterAnother > carouselImagesAnother.length) {
        counterAnother = carouselImagesAnother.length;
        carouselSlideAnother.style.transform = 'translateX(' + (-(carouselImagesAnother.length - 2) * sizeAnother) + 'px)';
    }

    if (-sizeAnother * counterAnother < -maxWidthCarouselAnother + windowWidth) {
        carouselSlideAnother.style.transform = 'translateX(' + (-maxWidthCarouselAnother + windowWidth) + 'px)';
        counterAnother--;
    }
});

prevBtnAnother.addEventListener('click',()=>{
    if (windowWidth < 600) {        
        windowWidth = window.innerWidth * 0.90;
    } else if (windowWidth >= 600 && windowWidth < 1000) {
        windowWidth = window.innerWidth * 0.95;
    } else if (windowWidth >= 1000 && windowWidth < 1500) {
        windowWidth = window.innerWidth * 0.99;
    }

    sizeAnother = carouselImagesAnother[0].clientWidth;
    let maxWidthCarouselAnother = carouselImagesAnother.length * sizeAnother;
    
    counterAnother--;
    carouselSlideAnother.style.transition = "transform 0.7s ease-in-out";
    carouselSlideAnother.style.transform = 'translateX(' + (-sizeAnother * counterAnother) + 'px)';

    if (counterAnother <= 1){
        counterAnother = 1;
        carouselSlideAnother.style.transform = 'translateX(0px)';
    }

    if (-sizeAnother * counterAnother < -maxWidthCarouselAnother + windowWidth) {
        carouselSlideAnother.style.transform = 'translateX(' + (-maxWidthCarouselAnother + windowWidth) + 'px)';
    }
});