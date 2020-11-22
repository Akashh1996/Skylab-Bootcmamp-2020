import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Form from './Form';
import {act} from 'react-dom/test-utils';


describe('Form compo',()=>{
    let container;
    beforeEach(()=>{
        container=document.createElement('div');
        document.body.appendChild(container);

        act(()=>{
            render(
                <Form/>,
                container
            );
        });
    });
    afterEach(()=>{
        unmountComponentAtNode(container);
        container.remove();
        container=null;
    });
    it ('should render the id from listcomponents',()=>{
        expect(document.getElementById('project-name')).toBeDefined();
    })
})