class ListComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroList(element_list) {
		element_list.innerHTML = '';
		this.heroes.forEach((hero) => {
			element_list.innerHTML =
				element_list.innerHTML +
				`
  <div class="list__of__heroes">
        <div class="list__of__heroes__detail">
          <span class="list__id__heroe">${hero.id}</span>
          <a href="./detail.html?heroId=${hero.id}" class="list__name__heroe">
          <input type="button" class="list__name__heroe" value="${hero.name}" />
          </a>
        </div>
      </div>
  
  `;
		});
	}
}
