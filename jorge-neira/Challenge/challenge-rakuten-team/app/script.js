const minWithScreen = window.matchMedia('(min-width: 1023px)');
const navMenuButtons = document.querySelectorAll('.menu__button');
const buttonIcon = document.querySelectorAll('.navigation-icon');
const buttonTitle = document.querySelectorAll('.icon-title');

const dropDownButtons = document.querySelectorAll('.drop-list-button');
const dropDownList = document.querySelectorAll('.title-drop-options');

///////////////NAV BUTTON HOVER////////////////////
navMenuButtons.forEach((button, index) => {
	button.addEventListener('mouseover', function () {
		if (minWithScreen.matches) {
			buttonTitle[index].style.transition = 'color .1s ease';
			buttonTitle[index].style.color = '#ffe300';
		} else {
			buttonIcon[index].style.transition = 'color .1s ease';
			buttonIcon[index].style.color = '#ffe300';
			buttonTitle[index].style.transition = 'color .1s ease';
			buttonTitle[index].style.color = '#ffe300';
		}
	});
});
navMenuButtons.forEach((button, index) => {
	button.addEventListener('mouseout', function () {
		if (minWithScreen.matches) {
			buttonTitle[index].style.transition = 'color .1s ease';
			buttonTitle[index].style.color = '#fff';
		} else {
			buttonIcon[index].style.transition = 'color .1s ease';
			buttonIcon[index].style.color = '#999';
			buttonTitle[index].style.transition = 'color .1s ease';
			buttonTitle[index].style.color = '#999';
		}
	});
});
////////////////////////////////////////////////////
dropDownButtons.forEach((button, index) => {
	button.addEventListener('mouseover', function () {
		if (minWithScreen.matches) {
			dropDownList[index].style.display = 'block';
		} else {
			return;
		}
	});
});
dropDownButtons.forEach((button, index) => {
	button.addEventListener('mouseout', function () {
		if (minWithScreen.matches) {
			dropDownList[index].style.display = 'none';
		} else {
			return;
		}
	});
});
////////////////////////////////////////////////////
minWithScreen