const store = new Store(heroes);

let url = window.location;
let heroObject = store.getHeroById(store.getIdFromLocation(url));
let nameTitle = document.getElementById('name-title');
let idInput = document.getElementById('id-input');
let nameInput = document.getElementById('name-input');
let heroPowerStats = Object.entries(heroObject['powerstats']);
let powerStatsNumber = document.querySelectorAll('.powerstats__number');
let circles = document.querySelectorAll('.circle');
let appearances = document.querySelectorAll('.characteristics');

store.updateValueHtml(nameTitle, 'innerHTML',`${heroObject['name']} ${nameTitle.innerHTML}`);
store.updateValueHtml(idInput, 'innerHTML', `${heroObject['id']}`);
store.updateValueHtml(nameInput, 'value', `${heroObject['name']}`)

for (let circleIndex = 0; circleIndex < circles.length; circleIndex++) {
  store.updateValueHtml(powerStatsNumber[circleIndex], 'innerHTML', heroPowerStats[circleIndex][1]);
  store.setstrokeDashoffsetInCircle(circles[circleIndex], heroPowerStats[circleIndex][1]);
}

for (let appearanceIndex; appearanceIndex < appearances.length; appearanceIndex++) {
  
}
