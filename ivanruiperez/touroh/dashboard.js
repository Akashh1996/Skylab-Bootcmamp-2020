class DashboardComponent {
  constructor(heroes) {
    this.heroes = heroes;
  }

  updateHtmlHeroList(element) {
    element.innerHTML = "";
    this.heroes.forEach((hero) => {
      element.innerHTML =
        element.innerHTML +
        `
<a href="./detail.html?heroId=${hero.id}" class="heroe__detail">
<div class="top__heroe__link">
<h4>${hero.name}</h4>
</div>
</a>
`;
    });
  }
}

module.exports = DashboardComponent;
