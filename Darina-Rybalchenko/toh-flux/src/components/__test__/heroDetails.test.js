import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import HeroDetails from './../HeroDetails'

describe('HeroDetails', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })
    test('should render', () => {
        const match = { params: { heroId: '11' } }
        act(() => {
            render(<BrowserRouter><HeroDetails match={match} /></BrowserRouter>, container)

        })
        expect(container.querySelector('h1').textContent).toBe(`There is no hero with id: ${match.params.heroId}`)
    })

})