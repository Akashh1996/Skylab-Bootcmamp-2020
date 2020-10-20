const store = new Store(heroes);

let url = window.location;
let heroObject = store.getHeroById(store.getIdFromLocation(url));
let nameTitle = document.getElementById('name-title');
let idInput = document.getElementById('id-input');
let nameInput = document.getElementById('name-input');
let heroPowerStats = Object.entries(heroObject['powerstats']);
let powerStatsNumber = document.querySelectorAll('.powerstats__number');
let circles = document.querySelectorAll('.circle');

let appearancesHtmlValues = document.querySelectorAll('.appearances__value');
let appearancesArrayValues = Object.values(heroObject['appearance']);

let biographiesHtmlValues = document.querySelectorAll('.biographies__value');
let biographiesArrayValues = Object.values(heroObject['biography']);

let workHtmlValues = document.querySelectorAll('.work__value');
let workArrayValues = Object.values(heroObject['work']);

let connectionsHtmlValues = document.querySelectorAll('.connections__value');
let connectionsArrayValues = Object.values(heroObject['connections']);

store.updateValueHtml(nameTitle, 'innerHTML',`${heroObject['name']} ${nameTitle.innerHTML}`);
store.updateValueHtml(idInput, 'innerHTML', `${heroObject['id']}`);
store.updateValueHtml(nameInput, 'value', `${heroObject['name']}`)

for (let circleIndex = 0; circleIndex < circles.length; circleIndex++) {
    store.updateValueHtml(powerStatsNumber[circleIndex], 'innerHTML', heroPowerStats[circleIndex][1]);
    store.setstrokeDashoffsetInCircle(circles[circleIndex], heroPowerStats[circleIndex][1]);
}

for (let index = 0; index < appearancesHtmlValues.length; index++) {
    let value = appearancesArrayValues[index];
    for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
        if (Array.isArray(value)) {
            appearancesHtmlValues[index] += value[valueIndex];
        } else {
            store.updateValueHtml(appearancesHtmlValues[index], 'innerHTML', value);
        }
    }
    
}

for (let index = 0; index < biographiesHtmlValues.length; index++) {
    store.updateValueHtml(biographiesHtmlValues[index], 'innerHTML', biographiesArrayValues[index]);
}

for (let index = 0; index < workHtmlValues.length; index++) {
    store.updateValueHtml(workHtmlValues[index], 'innerHTML', workArrayValues[index]);
}

for (let index = 0; index < connectionsHtmlValues.length; index++) {
    store.updateValueHtml(connectionsHtmlValues[index], 'innerHTML', connectionsArrayValues[index]);
}

