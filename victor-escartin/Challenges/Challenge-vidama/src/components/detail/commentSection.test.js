import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import CommentSection from './CommentSection';
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
            render(<CommentSection />, container);
        });
        expect(document.querySelector('.comment-section')).toBeDefined();
    });
    it('function HandleClick working ', () => {
        act(() => {
            render(<CommentSection />, container);
            let documentElement = document.querySelector('.post-button');
            documentElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            expect(documentElement.style.display).toBe('none');
        });
    });
    it('handleTextareaChange working fine', () => {
        act(() => {
            render(<CommentSection />, container);
            let textAreaElement = document.querySelector('.text-area-onChange');
            let buttonElement = document.querySelector('.post-button');
            Simulate.change(textAreaElement, {
                target: { value: 'I suck at JS' }
            });
            expect(buttonElement.style.display).toBe('block');
        });
    });
})