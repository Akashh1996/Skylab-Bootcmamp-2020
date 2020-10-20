function topHeroes(store) {
    const asideHeroes = store.getTopHeroes();
    const heroesBlock = document.getElementById('aside-heroes-block');
    for (let index = 1; index < 11; index++) {
        let element = document.createElement('a')
    }
}

function hasProperty(obj) {
    for (property in obj) {
        if (typeof obj[property] === 'object')
    }
}

function deepClone(obj) {
    let newObj = {};
    let property = 0;
    if (!obj) return obj;
    else {
        for (property in obj) {
            if (typeof obj[property] === 'object') {
                newObj[property] = deepClone(obj[property]);
            } else {
                newObj[property] = obj[property];
            }
        }
    }
    return newObj;
}

topHeroes(store);