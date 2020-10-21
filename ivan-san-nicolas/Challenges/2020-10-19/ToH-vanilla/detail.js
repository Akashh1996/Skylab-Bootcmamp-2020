function getIdfromURL(location) {
    const locationSearch = location.search;
    let locationIdAndValue = locationSearch.slice(1, locationSearch.length);
    let separatedId = locationIdAndValue.split('=');
    let id = +separatedId[1];
    return heroesInfo(id, store);
}

function heroesInfo(id, store) {
    const actualHero = store.getHeroeById(id);
    debugger;
    const heroDetail = document.getElementById('hero-detail__info');
    let heroTitle = document.getElementById('hero-detail-title');
    heroTitle.innerHTML = actualHero.name;
    for (property in actualHero) {
        if (typeof actualHero[property] !== 'object') {
            let element = document.createElement('div');
            element.innerHTML = `<div class="hero-detail__info__block">
                    <span class="hero-detail__info__block__property-name" id="hero-detail-${property}"></span>
                    <span class="hero-detail__info__block__property-value" id="hero-detail-${actualHero[property]}"></span>
                </div>
                `;
            heroDetail.appendChild(element);
            document.getElementById(`hero-detail-${property}`).innerHTML = property;
            document.getElementById(`hero-detail-${actualHero[property]}`).innerHTML = actualHero[property];
        } else {
            let element = document.createElement('section');
            element.innerHTML = `<section class="hero-detail__info__block hero-properties" id="hero-detail-group-${property}">
            </section>`;
            heroDetail.appendChild(element);
            document.getElementById(`hero-detail-group-${property}`).innerHTML = property;
            for (value in actualHero[property]) {
                let subElement = document.createElement('div');
                subElement.innerHTML = `<div class="hero-detail__info__block">
                    <span class="hero-detail__info__block__property-name" id="hero-detail-${value}"></span>
                    <span class="hero-detail__info__block__property-value" id="hero-detail-${actualHero[property][value]}"></span>
                </div>`;
                element.appendChild(subElement);
                document.getElementById(`hero-detail-${value}`).innerHTML = value;
                document.getElementById(`hero-detail-${actualHero[property][value]}`).innerHTML = actualHero[property][value];
            }

        }
    }
}

getIdfromURL(location);