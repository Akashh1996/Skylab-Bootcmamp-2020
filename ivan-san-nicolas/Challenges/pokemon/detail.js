function getIdfromURL(location) {
    const locationSearch = location.search;
    let locationIdAndValue = locationSearch.slice(1, locationSearch.length);
    let separatedId = locationIdAndValue.split('=');
    let id = +separatedId[1];
    return heroesInfo(id, store);
}

function heroesInfo(id, store) {
    debugger;
    const actualHero = store.getHeroeById(id);
    const heroDetail = document.getElementById('hero__detail__info');
    const heroStats = document.getElementById('hero__detail__info__stats');
    const heroProps = document.getElementById('hero-detail__properties');
    const heroTitle = document.getElementById('hero-detail-title');
    heroTitle.innerHTML = actualHero.name;
    const heroImage = document.createElement('div');
    heroImage.innerHTML = `<img src="${actualHero.images.sm}" alt="${actualHero.name}-img">`;
    heroDetail.appendChild(heroImage);
    for (property in actualHero) {
        if (typeof actualHero[property] !== 'object') {
            let element = document.createElement('div');
            element.innerHTML = `<div class="hero-detail__info__block">
                    <span class="hero-detail__info__block__property-name" id="hero-detail-${property}"></span>
                    <span class="hero-detail__info__block__property-value" id="hero-detail-${actualHero[property]}"></span>
                </div>
                `;
            heroStats.appendChild(element);
            document.getElementById(`hero-detail-${property}`).innerHTML = property;
            document.getElementById(`hero-detail-${actualHero[property]}`).innerHTML = actualHero[property];
        } else {
            if (property !== 'images') {
                let element = document.createElement('div');
                element.innerHTML = `<div class="hero-detail__info__block">
                        <span class="hero-detail__info__block__property-name stats" id="hero-detail-${property}"></span>
                    </div>`;
                heroProps.appendChild(element);
                document.getElementById(`hero-detail-${property}`).innerHTML = property;
                element.addEventListener('click', (property) => {
                    alert('funsiona');
                });
            }
        }
    }
}

getIdfromURL(location);

/* 
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
*/