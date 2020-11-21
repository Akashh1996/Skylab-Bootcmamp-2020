import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import ListComponent from './ListComponent';
import {act} from 'react-dom/test-utils';
import {Provide} from 'redux';
import configureStore from '../../redux/configureStore';
import store from '../../index';


describe('ListComponent',()=>{
    let container;
    beforeEach(()=>{
        container=document.createElement('div');
        document.body.appendChild(container);

        act(()=>{
            render(
                <Provide store={store}>

                    <ListComponent/>,
                </Provide>,
                container

            );
        });
    });
    afterEach(()=>{
        unmountComponentAtNode(container);
        container.remove();
        container=null;
    });
    it ('should render the id from ListComponents',()=>{
        expect(document.getElementById('list-wrapper')).toBeDefined();
    });
})