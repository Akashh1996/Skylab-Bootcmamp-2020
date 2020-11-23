import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as listActions from './listActions';
import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares=[thunk];
const mockStore=configureMockStore(middlewares);

describe('actions',()=>{
    describe('listActions',()=>{
        let fakeData;
        let fakeError;
        let store;
        beforeEach(()=>{
            store=mockStore();
            fakeData={data:'projects'};
            fakeError='error';

        });
        afterEach(()=>{
            jest.resetAllMocks();
        });
        test('requestListSuccess should return LOAD_LIST inside the store', async()=>{
            axios.get=jest.fn().mockResolvedValueOnce(fakeData);

            await store.dispatch(listActions.requestList());

            expect(store.getActions()[0].type).toBe(actionTypes.LOAD_LIST);
        })
        test('requestList with promise reject should put action.type requestListError',async ()=>{
            axios.get=jest.fn().mockRejectedValueOnce(fakeError);

            await store.dispatch(listActions.requestList());

            expect(store.getActions()[0].type).toBe(actionTypes.LOAD_LIST_ERROR);

        });
        test('requestProjectDetail with promise should put action.type requestProjectDetailSuccess',async ()=>{
            axios.get=jest.fn().mockResolvedValueOnce(fakeData);

            await store.dispatch(listActions.requestProjectDetail());

            expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECT_DETAIL);

        })
        test('requestProjectDetail with promise  reject should put action.type load project detail error',async ()=>{
            axios.get=jest.fn().mockRejectedValueOnce(fakeError);

            await store.dispatch(listActions.requestProjectDetail());

            expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PROJECT_DETAIL_ERROR);

        });
        test('CreateProject with promise   should put action.type delete project',async ()=>{
            axios.get=jest.fn().mockResolvedValueOnce(fakeData);

            await store.dispatch(listActions.createProject());

            expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT);

        });
        test('CreateProject with promise reject should put action.type delete project error',async ()=>{
            axios.get=jest.fn().mockRejectedValueOnce(fakeError);

            await store.dispatch(listActions.createProject());

            expect(store.getActions()[0].type).toBe(actionTypes.CREATE_PROJECT_ERROR);

        });
        test('deleteProject with promise  should put action.type delete project',async ()=>{
            axios.get=jest.fn().mockResolvedValueOnce(fakeData);

            await store.dispatch(listActions.deleteProject());

            expect(store.getActions()[0].type).toBe(actionTypes.DELETE_PROJECT);

        });
        test('deleteProject with promise reject should put action.type delete project error',async ()=>{
            axios.get=jest.fn().mockRejectedValueOnce(fakeError);

            await store.dispatch(listActions.deleteProject());

            expect(store.getActions()[0].type).toBe(actionTypes.DELETE_PROJECT_ERROR);

        });
    })
})