const mydate = document.getElementById("mydate")
const showDate = document.getElementById('showdate');

showDate.addEventListener('click', function () {
	mydate.innerHTML = Date();
});
