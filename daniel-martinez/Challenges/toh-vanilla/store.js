let _superHeroes;

class Store {
	loadHeroes (){
		return fetch('./../superHeroData.json')
		.then((response)=>{
			return response.json();
		}).then((value)=> {
			_superHeroes = value;
		});
	}

    getHeroes() {
		return _superHeroes;
    }

    getHeroById(id){
        return this.getHeroes().find(hero => hero.id === id);
    }

    getTopHeroes(){
        return this.getHeroes().slice(0,4);
	}

	setDashboard (){
		let array = this.getHeroes();
		let liElem = '';
		for (let heroe = 0; heroe < this.getTopHeroes().length; heroe++) {
			liElem +=
				`<a href="./detail.html?id=${array[heroe].id}"><li class="demoClass">${array[heroe].name}</li></a>`;
		}
		return liElem;
	};

	anchorListOfHeroes () {
		let array = this.getHeroes();
		let liElem = '';
		for (let heroe = 0; heroe < array.length; heroe++) {
			liElem +=
				`<a href="./detail.html?id=${array[heroe].id}"><li class="demoClass">${array[heroe].id} ${array[heroe].name}</li></a>`;
		}
		return liElem;
	};

	setImage(id){
		let hero = this.getHeroById(id);
		let images = hero["images"];
		let liElem = '';
		for (let property in images){
			liElem += `<img src=${images[property]} alt="image-${property}" id="image-${property}">`
		}
		return liElem;
	}

	imageTab (id){
		let hero = this.getHeroById(id);
		let images = hero["images"];
		let liElem = '';
		for (let property in images){
			if (property === 'xs'){
				liElem += `${images[property]}`
			}
		}
		return liElem;
	}

	heroTitle(id){
		return this.getHeroById(id)["name"]+ ' details';
	}

	updateHtmlValue(element, property, value) {
        element[property] = value;
	}
	
	getArrayPowerStats (id) {
		let heroObj = this.getHeroById(id);
		let arrayPowerStats = [];
		let objPowerStats = heroObj["powerstats"];
		for (let property in objPowerStats) {
			arrayPowerStats.push([property, objPowerStats[property]]);
		}
		return arrayPowerStats;
	};


	drawPowerStats(id) {
		let arrayPowerStats = this.getArrayPowerStats(id);
		for (let powerstat = 0; powerstat < arrayPowerStats.length; powerstat++){
			let circle = document.getElementById(`circle${powerstat+1}`);
			store.setstrokeDashoffsetInCircle(circle, arrayPowerStats[powerstat][1]);
			document.getElementById(`powerstat${powerstat+1}-number`).innerHTML = arrayPowerStats[powerstat][1];
			document.getElementById(`powerstat${powerstat+1}-text`).innerHTML = arrayPowerStats[powerstat][0];
		}
	}

	getDashOffSetfromPercent(circle, percent) {
        let radius = circle.getAttribute('r');
        let circumference = Math.PI * radius * 2;
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
        let dashOffSet = circumference - percent / 100 * circumference;
        return dashOffSet;
    }
    setstrokeDashoffsetInCircle(circle, percent) {
        circle.style.strokeDashoffset = this.getDashOffSetfromPercent(circle, percent);
	}
	
	setAppearance(id) {
		let heroObj = this.getHeroById(id);
		let appObj = heroObj["appearance"];
		let liElem = '';
		for (let property in appObj) {
			if (appObj[property] !== null && appObj[property] !== "-"){
				if (property === "height" || property === "weight"){
					if (appObj[property][0] === null || appObj[property][0] === "-" || appObj[property][0] === "- lb"){
						liElem +=
					`<li class="appearance__list-item"><b>${property}:</b> ${appObj[property][1]}</li>`;
					} 
					else if (appObj[property][1] === null || appObj[property][1] === "- kg") {
						liElem +=
					`<li class="appearance__list-item"><b>${property}:</b> ${appObj[property][0]}</li>`;
					} else {
						liElem +=
					`<li class="appearance__list-item"><b>${property}:</b> ${appObj[property][0]} / ${appObj[property][1]}</li>`;
					}
				}
				else {
					liElem +=
				`<li class="appearance__list-item"><b>${property}:</b> ${appObj[property]}</li>`;
				}
			}
		}
			return liElem;
		};

		setBiography(id) {
			let heroObj = this.getHeroById(id);
			let bioObj = heroObj["biography"];
			let liElem = '';
			for (let property in bioObj) {
				if (bioObj[property] !== null && bioObj[property] !== "-" && bioObj[property] !== undefined){
					liElem +=
					`<li class="biography__list-item"><b>${property}:</b> ${bioObj[property]}</li>`;
				}
			}
			return liElem;
		};

		setWork(id) {
			let heroObj = this.getHeroById(id);
			let workObj = heroObj["work"];
			let liElem = '';
			for (let property in workObj) {
				if (workObj[property] !== null && workObj[property] !== "-" && workObj[property] !== undefined){
					liElem +=
					`<li class="work__list-item"><b>${property}:</b> ${workObj[property]}</li>`;
				}
			}
			return liElem;
		};

		setConnections(id) {
			let heroObj = this.getHeroById(id);
			let connObj = heroObj["connections"];
			let liElem = '';
			for (let property in connObj) {
				if (connObj[property] !== null && connObj[property] !== "-" && connObj[property] !== undefined){
					liElem +=
					`<li class="connection__list-item"><b>${property}:</b> ${connObj[property]}</li>`;
				}
			}
			return liElem;
		};
}

const store = new Store();


module.exports = store;