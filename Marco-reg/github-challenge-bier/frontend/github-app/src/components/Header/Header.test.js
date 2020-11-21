import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Header from './Header';
import {act} from 'react-dom/test-utils';


describe('Header',()=>{
    let container;
    beforeEach(()=>{
        container=document.createElement('div');
        document.body.appendChild(container);

        act(()=>{
            render(
                
                    <Header/>,
                
                container
            );
        });
    });
    afterEach(()=>{
        unmountComponentAtNode(container);
        container.remove();
        container=null;
    });
    it('Should have a Header',()=>{
        expect(document.getElementById('header-wrapper')).toBeDefined();
    });
})