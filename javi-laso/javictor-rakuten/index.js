const carouselSlide1= document.querySelector('.carousel-slide1');
const carouselImages1= document.querySelectorAll('.carousel-slide1 img');
const carouselSlide2= document.querySelector('.carousel-slide2');
const carouselImages2= document.querySelectorAll('.carousel-slide2 img');
const carouselSlide3= document.querySelector('.carousel-slide3');
const carouselImages3= document.querySelectorAll('.carousel-slide3 img');
const carouselSlideS= document.querySelector('.carousel-slideS');
const carouselImagesS= document.querySelectorAll('.carousel-slideS img');

//Buttons
const prevBtn1=document.querySelector('#prevBtn1');
const nextBtn1=document.querySelector('#nextBtn1');
const prevBtn2=document.querySelector('#prevBtn2');
const nextBtn2=document.querySelector('#nextBtn2');
const prevBtn3=document.querySelector('#prevBtn3');
const nextBtn3=document.querySelector('#nextBtn3');
const prevBtnS=document.querySelector('#prevBtnS');
const nextBtnS=document.querySelector('#nextBtnS');

// CAROUSEL SECTION-MENU

//Counter
let counterS=1;
const sizeS= carouselImagesS[0].clientWidth;

carouselSlideS.getElementsByClassName.transform='translateX('+(-sizeS*counterS)+'px)';

//Button Listeners

nextBtnS.addEventListener('click',()=>{
    if (counterS>=carouselImagesS.length-1)return;
    carouselSlideS.style.transition="transform 0.7s ease-in-out";
    counterS+=3;
    carouselSlideS.style.transform='translateX('+(-sizeS*counterS)+'px)';
});

prevBtnS.addEventListener('click',()=>{
    if (counterS<=0)return;
    carouselSlideS.style.transition="transform 0.7s ease-in-out";
    counterS-=3;
    carouselSlideS.style.transform='translateX('+(-sizeS*counterS)+'px)';
});

carouselSlideS.addEventListener('transitionend',()=>{
    if(carouselImagesS[counterS].id==='lastCloneS'){
        carouselSlideS.style.transition='none';
        counterS=carouselImagesS.length - counterS;
        carouselSlideS.style.transform='translateX('+(-sizeS*counterS)+'px)';

    }
    if(carouselImagesS[counterS].id==='firstCloneS'){
        carouselSlideS.style.transition='none';
        counterS=carouselImagesS.length - counterS;
        carouselSlideS.style.transform='translateX('+(-sizeS*counterS)+'px)';
    }
});

// CAROUSEL 1

//Counter
let counter1=1;
const size1= carouselImages1[0].clientWidth;

carouselSlide1.getElementsByClassName.transform='translateX('+(-size1*counter1)+'px)';

//Button Listeners

nextBtn1.addEventListener('click',()=>{
    if (counter1>=carouselImages1.length-1)return;
    carouselSlide1.style.transition="transform 0.7s ease-in-out";
    counter1+=3;
    carouselSlide1.style.transform='translateX('+(-size1*counter1)+'px)';
});

prevBtn1.addEventListener('click',()=>{
    if (counter1<=0)return;
    carouselSlide1.style.transition="transform 0.7s ease-in-out";
    counter1-=4;
    carouselSlide1.style.transform='translateX('+(-size1*counter1)+'px)';
});

carouselSlide1.addEventListener('transitionend',()=>{
    if(carouselImages1[counter1].id==='lastClone1'){
        carouselSlide1.style.transition='none';
        counter1=carouselImages1.length - counter1;
        carouselSlide1.style.transform='translateX('+(-size1*counter1)+'px)';

    }
    if(carouselImages1[counter1].id==='firstClone1'){
        carouselSlide1.style.transition='none';
        counter1=carouselImages1.length - counter1;
        carouselSlide1.style.transform='translateX('+(-size1*counter1)+'px)';
    }
});


// CAROUSEL 2

//Counter
let counter2=1;
const size2= carouselImages2[0].clientWidth;

carouselSlide2.getElementsByClassName.transform='translateX('+(-size2*counter2)+'px)';

//Button Listeners

nextBtn2.addEventListener('click',()=>{
    if (counter2>=carouselImages2.length-1)return;
    carouselSlide2.style.transition="transform 0.7s ease-in-out";
    counter2+=3;
    carouselSlide2.style.transform='translateX('+(-size2*counter2)+'px)';
});

prevBtn2.addEventListener('click',()=>{
    if (counter2<=0)return;
    carouselSlide2.style.transition="transform 0.7s ease-in-out";
    counter2-=4;
    carouselSlide2.style.transform='translateX('+(-size2*counter2)+'px)';
});

carouselSlide2.addEventListener('transitionend',()=>{
    if(carouselImages2[counter2].id==='lastClone2'){
        carouselSlide2.style.transition='none';
        counter2=carouselImages2.length - counter2;
        carouselSlide2.style.transform='translateX('+(-size2*counter2)+'px)';

    }
    if(carouselImages2[counter2].id==='firstClone2'){
        carouselSlide2.style.transition='none';
        counter2=carouselImages2.length - counter2;
        carouselSlide2.style.transform='translateX('+(-size2*counter2)+'px)';
    }
});

// CAROUSEL 3

//Counter
let counter3=1;
const size3= carouselImages3[0].clientWidth;

carouselSlide3.getElementsByClassName.transform='translateX('+(-size3*counter3)+'px)';

//Button Listeners

nextBtn3.addEventListener('click',()=>{
    if (counter3>=carouselImages3.length-1)return;
    carouselSlide3.style.transition="transform 0.7s ease-in-out";
    counter3+=3;
    carouselSlide3.style.transform='translateX('+(-size3*counter3)+'px)';
});

prevBtn3.addEventListener('click',()=>{
    if (counter3<=0)return;
    carouselSlide3.style.transition="transform 0.7s ease-in-out";
    counter3-=4;
    carouselSlide3.style.transform='translateX('+(-size3*counter3)+'px)';
});

carouselSlide3.addEventListener('transitionend',()=>{
    if(carouselImages3[counter3].id==='lastClone3'){
        carouselSlide3.style.transition='none';
        counter3=carouselImages3.length - counter3;
        carouselSlide3.style.transform='translateX('+(-size3*counter3)+'px)';

    }
    if(carouselImages3[counter3].id==='firstClone3'){
        carouselSlide3.style.transition='none';
        counter3=carouselImages3.length - counter1;
        carouselSlide3.style.transform='translateX('+(-size3*counter3)+'px)';
    }
});
