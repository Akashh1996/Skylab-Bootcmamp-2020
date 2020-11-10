import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import HeroList from './../HeroList'

describe('HeroList', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    test('should render', () => {
        act(() => {
            render(<BrowserRouter><HeroList /></BrowserRouter>, container)
        })
        expect(container.querySelector('h1').textContent).toBe('There are no heroes!')
    })
})