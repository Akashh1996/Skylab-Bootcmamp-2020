import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Detail from './Detail';
describe('Detail', () => {
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
    it('should render Detail', () => {
        act(() => {
            render(<Detail />, container);
        });
        expect(document.querySelector('.Detail-mainpage')).toBeDefined();
    });
});