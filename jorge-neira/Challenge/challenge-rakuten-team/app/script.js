const minWithScreen = window.matchMedia('(min-width: 1023px)');
const navMenuButtons = document.querySelectorAll('.menu__button');
const buttonIcon = document.querySelectorAll('.navigation-icon');
const buttonTitle = document.querySelectorAll('.icon-title');
const dropDownButtons = document.querySelectorAll('.drop-list-button');
const dropDownList = document.querySelectorAll('.title-drop-options');
const searchDropDownbtn = document.querySelector('.search-dropdown__input');
const searchDropDownInput = document.querySelector('.search-box__input');
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
minWithScreen.addEventListener('change', function (change) {
	if (minWithScreen.matches === true) {
		buttonTitle.forEach((title) => {
			title.style.color = '#fff';
		});
	}
	if (change.matches != true) {
		buttonTitle.forEach((title) => {
			title.style.color = '#999';
		});
		buttonIcon.forEach((icon) => {
			icon.style.color = '#999';
		});
	}
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
searchDropDownbtn.addEventListener('click', function () {
	if (minWithScreen.matches != true) {
		searchDropDownInput.style.display = 'block';
		searchDropDownInput.focus();
		searchDropDownInput.style.transform = 'translateY(0)';
		searchDropDownInput.style.transition = 'all 0.2s ease 0.2s';
	}
});

searchDropDownInput.addEventListener('focusout', function () {
	if (minWithScreen.matches != true) {
		searchDropDownInput.style.transition = 'all 0.2s ease 0.2s';
		searchDropDownInput.style.transform = 'translateY(-50px)';
		searchDropDownInput.focus() === false;
	}
});

minWithScreen.addEventListener('change', function (change) {
	if (minWithScreen.matches === true) {
		searchDropDownInput.style.transform = 'translateY(0)';
		searchDropDownInput.style.transition = 'none';
	}
	if (change.matches != true) {
		searchDropDownInput.style.transform = 'translateY(-50px)';
		searchDropDownInput.style.transition = 'none';
	}
});
