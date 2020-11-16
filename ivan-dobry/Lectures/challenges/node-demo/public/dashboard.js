/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
store.loadHeroes().then(() => {
  // eslint-disable-next-line no-debugger
  const topHeroes = store.getTopHeroes();

  const topButtonHeroes = document.getElementById('buttons');

  function makeTopHeroes(array) {
    for (let i = 0; i < array.length; i++) {
      const cell = document.createElement('a');
      topButtonHeroes.appendChild(cell).className = 'section__button';
      cell.innerHTML = array[i].name;
      cell.href = `details.html?heroId=${i + 2}`;
    }
  }

  makeTopHeroes(topHeroes);
});
