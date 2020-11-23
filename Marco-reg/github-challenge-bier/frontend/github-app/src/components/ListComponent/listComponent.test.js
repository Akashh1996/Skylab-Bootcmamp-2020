import React from 'react';
import {render } from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch} from 'react-router-dom';
import {deleteProject} from '../../redux/actions/listActions';
import thunk from 'redux-thunk';
import List from './ListComponent';
import configureStore from 'redux-mock-store';

jest.mock('../../redux/actions/listActions');

const buildStore=configureStore([thunk]);

describe('ListCompo',()=>{
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
        );
    }
    afterEach(()=>{
        jest.restoreAllMocks();
        wrapper=null;
    });
    [
        {selector:"#delete-project", value:"DELETE"}
    ].forEach(({selector,value})=>{
        test(`should render ${selector}to have text content ${value} `,()=>{
            const initialState = {listReducers: {list:[{_id:'sd', projectName:"adasd", projectInfo:"adasd",technology:['asd','1234'],photo:"asdasd"}]}};
            wrapper=wrapperFactory(initialState);

            render(<List/>,{wrapper})

            expect(document.querySelector(selector).textContent).toBe(value);
        })
        test(`should render ${selector}to have text content ${value} `,()=>{
            const initialState = {listReducers: {list:[{_id:'sd', projectName:"adasd", projectInfo:"adasd",technology:['asd','1234'],photo:""}]}};
            wrapper=wrapperFactory(initialState);

            render(<List/>,{wrapper})

            expect(document.querySelector(selector).textContent).toBe(value);
        })

    })
    test('should dispatch on click delete button', () => {
        const initialState = {listReducers: {list:[{_id:'sd', projectName:"adasd", projectInfo:"adasd",technology:['asd','1234'],photo:""}]}};
            wrapper=wrapperFactory(initialState);

            render(<List/>,{wrapper})
        document.querySelector("#delete-project").click()
        expect(deleteProject).toHaveBeenCalled()
        
    })
})

