// import { render } from '@texting-library/react';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';

// const initialState = {};

// const buildStore = configureStore([thunk]);

// describe.skip('Principal', () => {
//     beforeEach(() => {
//         const store = buildStore(initialState);

//         const Wrapper = ({ children }) => {
//             <Provider store={store}>
//                 {children}
//             </Provider>
//         };
//     });

//     test('should render', ()=> {
//         render(<Principal />, { wrapper: Wrapper})

//         expect(document.querySelector('.title').textContent).toBe('Todo list')
//     })
// });