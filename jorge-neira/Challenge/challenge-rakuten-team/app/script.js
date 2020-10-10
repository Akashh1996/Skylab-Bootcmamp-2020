const navMenuButtons = document.querySelectorAll(".menu__button");
const buttonIcon = document.querySelectorAll(".navigation-icon");
const buttonTitle = document.querySelectorAll(".icon-title");

///////////////NAV BUTTON HOVER////////////////////
navMenuButtons.forEach((button, index) => {
  button.addEventListener("mouseover", function () {
    buttonIcon[index].style.transition = "color .1s ease";
    buttonIcon[index].style.color = "#ffe300";
    buttonTitle[index].style.transition = "color .1s ease";
    buttonTitle[index].style.color = "#ffe300";
  });
});
navMenuButtons.forEach((button, index) => {
  button.addEventListener("mouseout", function () {
    buttonIcon[index].style.transition = "color .1s ease";
    buttonIcon[index].style.color = "#999";
    buttonTitle[index].style.transition = "color .1s ease";
    buttonTitle[index].style.color = "#999";
  });
});
////////////////////////////////////////////////////
