import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import Form from './Form';
import configureStore from 'redux-mock-store';
import {createProject} from '../../redux/actions/listActions';
import { Simulate } from 'react-dom/test-utils';
jest.mock('../../redux/actions/ListActions');

const buildStore=configureStore([thunk]);

describe('Forms testing',()=>{
    let wrapper;

    const wrapperFactory=(wrapperInitialState)=>{
        const store=buildStore(wrapperInitialState);
        store.dispatch=jest.fn();

        return({children})=>(
            <Provider store={store}>
                <BrowserRouter>
                {children}
                </BrowserRouter>
            </Provider>
        )
            
        
    }
    afterEach(()=>{
        jest.restoreAllMocks();
        wrapper=null;
    })
    test('should render submit button',()=>{
        const initialState={};
        wrapper=wrapperFactory(initialState);
        render(<Form/>,{wrapper})

        expect(document.getElementById('submit-form')).toHaveTextContent('Submit');
    })
    test ('should dispatch on click call the function dispatch',()=>{
        const initialState = {};
            wrapper=wrapperFactory(initialState);

            render(<Form/>,{wrapper})
        document.getElementById("submit-form").click()
        expect(createProject).toHaveBeenCalled()
    })
    test ('should input change value on projectName',()=>{
        const initialState = {};
            wrapper=wrapperFactory(initialState);

            render(<Form/>,{wrapper})
        let textAreaElement=document.getElementById('project-name');
        Simulate.change(textAreaElement,{target:{value:'hey'}});
        expect(textAreaElement.value).toBe("hey")
    })
    test ('should input change value on projectInfo',()=>{
        const initialState = {};
            wrapper=wrapperFactory(initialState);

            render(<Form/>,{wrapper})
        let textAreaElement=document.getElementById('project-info');
        Simulate.change(textAreaElement,{target:{value:'hey'}});
        expect(textAreaElement.value).toBe("hey")
    })
    test ('should input change value on projectPhoto',()=>{
        const initialState = {};
            wrapper=wrapperFactory(initialState);

            render(<Form/>,{wrapper})
        let textAreaElement=document.getElementById('project-photo');
        Simulate.change(textAreaElement,{target:{value:'hey'}});
        expect(textAreaElement.value).toBe("hey")
    })
    
})
