function powerHeroStats(heroId) {
    let newArray = Object.entries(store.getHeroById(heroId).powerstats);
    console.log(newArray)
    var li='';
    for (var index = 0; index < newArray.length; index++ ) {
        li += `<div id="box">
        <div class="percent">
            <svg>
                <circle cx="45" cy="45" r="37"></circle>
                <circle cx="45" cy="45" r="37"></circle>
            </svg>
            <div class="number">
        <span>${newArray[index][1]}</span>
            </div>
        </div>
        <span>${newArray[index][0]}</span>
        </div>`
    }
    return li
}

module.exports = powerHeroStats;