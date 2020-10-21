const store = new Store();

let url = window.location;
let nameTitle = document.getElementById('name-title');
let idInput = document.getElementById('id-input');
let nameInput = document.getElementById('name-input');
let powerStatsNumber = document.querySelectorAll('.powerstats__number');
let circles = document.querySelectorAll('.circle');

let body = document.getElementsByTagName('body')[0];

let appearancesHtmlValues = document.querySelectorAll('.appearances__value');

let biographiesHtmlValues = document.querySelectorAll('.biographies__value');

let workHtmlValues = document.querySelectorAll('.work__value');

let connectionsHtmlValues = document.querySelectorAll('.connections__value');

let photography = document.getElementById('photography');

store.loadHeroes().then(() => {
    let heroObject = store.getHeroById(store.getIdFromLocation(url));
    let heroPowerStats = Object.entries(heroObject['powerstats']);
    let appearancesArrayValues = Object.values(heroObject['appearance']);
    let biographiesArrayValues = Object.values(heroObject['biography']);
    let workArrayValues = Object.values(heroObject['work']);
    let connectionsArrayValues = Object.values(heroObject['connections']);

    store.updateValueHtml(body, 'style', `background-image: url(${heroObject['images']['lg']})`)

    store.updateValueHtml(nameTitle, 'innerHTML',`${heroObject['name']} ${nameTitle.innerHTML}`);
    store.updateValueHtml(idInput, 'innerHTML', `${heroObject['id']}`);
    store.updateValueHtml(nameInput, 'value', `${heroObject['name']}`)

    for (let circleIndex = 0; circleIndex < circles.length; circleIndex++) {
        store.updateValueHtml(powerStatsNumber[circleIndex], 'innerHTML', heroPowerStats[circleIndex][1]);
        store.setStrokeDashoffsetInCircle(circles[circleIndex], heroPowerStats[circleIndex][1]);
        store.setStrokeDasharrayInCircle(circles[circleIndex], heroPowerStats[circleIndex][1]);
    }

    for (let index = 0; index < appearancesHtmlValues.length; index++) {
        let value = appearancesArrayValues[index];
        if (Array.isArray(value)) {
            store.updateValueHtml(appearancesHtmlValues[index], 'innerHTML', value[0]);
            for (let valueIndex = 1; valueIndex < value.length; valueIndex++) {
                appearancesHtmlValues[index].innerHTML += `<br>${value[valueIndex]}`;
            }
        } else {
            store.updateValueHtml(appearancesHtmlValues[index], 'innerHTML', value);
        }    
    }

    for (let index = 0; index < biographiesHtmlValues.length; index++) {
        let value = biographiesArrayValues[index];
        if (Array.isArray(value)) {
            store.updateValueHtml(biographiesHtmlValues[index], 'innerHTML', value[0]);
            for (let valueIndex = 1; valueIndex < value.length; valueIndex++) {
                biographiesHtmlValues[index].innerHTML += `<br>${value[valueIndex]}`;
            }
        } else {
            store.updateValueHtml(biographiesHtmlValues[index], 'innerHTML', value);
        }
    }

    for (let index = 0; index < workHtmlValues.length; index++) {
        let value = workArrayValues[index].split(';');
        store.updateValueHtml(workHtmlValues[index], 'innerHTML', value[0]);
        for (let valueIndex = 1; valueIndex < value.length; valueIndex++) {
            workHtmlValues[index].innerHTML += `<br>${value[valueIndex]}`;
        }
    }

    for (let index = 0; index < connectionsHtmlValues.length; index++) {
        let value = connectionsArrayValues[index].split(';');
        store.updateValueHtml(connectionsHtmlValues[index], 'innerHTML', value[0]);
        for (let valueIndex = 1; valueIndex < value.length; valueIndex++) {
            connectionsHtmlValues[index].innerHTML += `<br>${value[valueIndex]}`;
        }
    }

    store.updateValueHtml(photography, 'src', heroObject['images']['sm']);
});