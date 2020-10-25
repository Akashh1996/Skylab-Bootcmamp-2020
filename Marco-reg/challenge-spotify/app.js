const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.artist');
    const links=document.querySelectorAll('nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    })
    links.forEach((link,index)=>{
        link.getElementsByClassName.animation=`navLinkFade 0.5s ease forwards${index/7+0.3}s`;
    })
}
navSlide();