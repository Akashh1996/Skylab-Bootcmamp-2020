import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import ListComponent from './ListComponent';
import {act} from 'react-dom/test-utils';
import {Provider} from 'redux';
// import configureStore from '../../redux/configureStore';
import store from '../../index';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


describe('ListComponent',()=>{
    let container;
    beforeEach(()=>{
        container =document.createElement('div');
        document.body.appendChild(container);

        act(()=>{
            render(
                <>
                <Provider store={store}>

                    <ListComponent/>
                </Provider>
                </>,

                
                container

            );
        });
    });
    afterEach(()=>{
        unmountComponentAtNode(container);
        container.remove();
        container=null;
    });
    test ('should render the id from ListComponents',()=>{
        expect(document.getElementById('project_wrapper')).toBeDefined();
    });
    
})