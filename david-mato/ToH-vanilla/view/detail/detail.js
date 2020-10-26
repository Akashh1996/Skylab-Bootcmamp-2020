class DetailComponent {
	constructor(hero) {
		this.hero = hero;
    }
    
    addPhoto(element, property, value) {
        element[property] = `<img src="${value}" />`
    }

	updateHtmlValue(element, property, value) {
        if (typeof value === "object" && value !== null) {
            element[property] = '<ul class="hero-subproperties-list">';
            for (let [key, keyValue] of Object.entries(value)) {
                if (Array.isArray(keyValue)) {
                    let absentValue = keyValue.find(element => element.includes('-'));
                    if (absentValue) {
                        continue;
                    } else {
                        for (let index = 1; index < keyValue.length; index++) {
                            keyValue[index] = ' ' + keyValue[index];
                        }
                    }
                } else if(keyValue === '-') {
                    continue;
                }
                key = key.replace(/([A-Z])/g, ' $1');
                key = key.toLowerCase();
                key = key.slice(0, 1).toUpperCase() + key.slice(1);
                element[property] += `<li class="hero-subproperties-list__suproperty">${key}: ${keyValue}</li>`
            }
            element[property] += '</ul>'
        } else {
            element[property] = value;
        }
	}
}

module.exports = DetailComponent;