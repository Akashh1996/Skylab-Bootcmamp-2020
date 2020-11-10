import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './../Dashboard'

describe('Dashboard', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            render(<BrowserRouter><Dashboard /></BrowserRouter>, container)
            expect(container.querySelector('h1').textContent).toBe('There are no heroes!')
        })
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null;
    })

    test('should render', () => {


    })
})

