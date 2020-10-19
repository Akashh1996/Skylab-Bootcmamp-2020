let url = window.location.search;
let heroObject = store.getHeroById(store.getIdFromUrl(url));
let nameTitle = document.getElementById('name-title');
let idInput = document.getElementById('id-input');
let nameInput = document.getElementById('name-input');
let heroPowerStats = Object.entries(heroObject['powerstats']);
let powerStatsNumber = document.querySelectorAll('.powerstats__number');
let circles = document.querySelectorAll('.circle');

nameTitle.innerHTML = `${heroObject['name']} ${nameTitle.innerHTML}`;
idInput.innerHTML = `${heroObject['id']}`;
nameInput.value = `${heroObject['name']}`;

for (let circleIndex = 0; circleIndex < circles.length; circleIndex++) {
  powerStatsNumber[circleIndex].innerHTML = heroPowerStats[circleIndex][1];
  store.setstrokeDashoffsetInCircle(circles[circleIndex], heroPowerStats[circleIndex][1]);
}
