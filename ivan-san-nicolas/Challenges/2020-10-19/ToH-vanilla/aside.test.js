const asideHeroes = require('./aside');
const store = require("./store.js");


describe('asideHeroes', () => {
    test('should return a new html element', () => {
        //arrange
        let result = `
        <a class="topHeroes-block" href="detail.html?id=${index + 1}">
        <div class="topHeroes-block__position" id="aside-heroe-${index}-pos"></div>
        <span class="topHeroes-block__name" id="aside__heroe-${index}-name"></span></a>
        `;
        //act
        let element = asideHeroes(store);
        //assert
        expect(element).toEqual(result);
    })
})