const ListComponent = require('./list-of-heroes')

describe('listComponent', () => {
    let listComponent;
    const heroes = [{ id: 11, name: 'Mr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }]

    beforeEach(() => {
        listComponent = new ListComponent(heroes);
    })

    test('should create', () => {
        expect(listComponent).toBeDefined();
    })

    test('should contain array of heroes', () => {
        expect(listComponent.heroes).toEqual(heroes)
    })

    test('should call updateHtmlHeroList', () => {
        const element = {};
		const markup = "<a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=11\"><span class=\"list-heroes__buttons--id\">11</span><span class=\"list-heroes__buttons--name\">Mr Nice</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=12\"><span class=\"list-heroes__buttons--id\">12</span><span class=\"list-heroes__buttons--name\">Narco</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=13\"><span class=\"list-heroes__buttons--id\">13</span><span class=\"list-heroes__buttons--name\">Bombasto</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=14\"><span class=\"list-heroes__buttons--id\">14</span><span class=\"list-heroes__buttons--name\">Celeritas</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=15\"><span class=\"list-heroes__buttons--id\">15</span><span class=\"list-heroes__buttons--name\">Magneta</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=16\"><span class=\"list-heroes__buttons--id\">16</span><span class=\"list-heroes__buttons--name\">RubberMan</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=17\"><span class=\"list-heroes__buttons--id\">17</span><span class=\"list-heroes__buttons--name\">Dynama</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=18\"><span class=\"list-heroes__buttons--id\">18</span><span class=\"list-heroes__buttons--name\">Dr IQ</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=19\"><span class=\"list-heroes__buttons--id\">19</span><span class=\"list-heroes__buttons--name\">Magma</span></a><a class=\"list-heroes__buttons\" href=\"../detail/detail.html?heroId=20\"><span class=\"list-heroes__buttons--id\">20</span><span class=\"list-heroes__buttons--name\">Tornado</span></a>";

		listComponent.updateHtmlHeroList(element);

		expect(element.innerHTML).toBe(markup);
	});
})