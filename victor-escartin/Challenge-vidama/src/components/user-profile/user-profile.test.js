import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import UserProfile from './UserProfile';
describe('Comment Section', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('Should render section', () => {
        act(() => {
            render(<UserProfile />, container);
        });
        expect(document.querySelector('.user-profile')).toBeDefined();
    });

})