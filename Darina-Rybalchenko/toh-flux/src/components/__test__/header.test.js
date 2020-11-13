import { render, unmountComponentAtNode } from 'react-dom'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'
import * as authActions from './../../actions/auth-actions'


describe('Header', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            render(<BrowserRouter><Header /></BrowserRouter>, container);
        });
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test('should call signInWithGoogle', () => {
        authActions.signInWithGoogle = jest.fn()
        const loginButton = document.getElementById('signInButton');
        act(() => {
            loginButton.dispatchEvent(
                new MouseEvent('click', { bubbles: true })
            );
        });
        expect(authActions.signInWithGoogle).toHaveBeenCalledTimes(1);
    });
});