import React from 'react'
import NotFound from './../NotFound'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove()
        container = null;

    })
    test('should have Page not found!', () => {
        const props = { history: { push: '/' } }
        act(() => {
            render(<BrowserRouter><NotFound props={props} /></BrowserRouter>, container)
        })
        expect(container.querySelector('h1').textContent).toBe('Page not found!')
    })

})