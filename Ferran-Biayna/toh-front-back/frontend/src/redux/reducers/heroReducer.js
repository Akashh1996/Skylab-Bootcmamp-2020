export default function heroReducer(state = {}, action) {
    switch (action.type) {
        case 'LOAD_HEROES':
            return {...state, list: action.heroes}
        case 'ADD_HERO':
            return {...state, list: action.heroes};
        case 'CHANGE_HERO':
            return {...state, list: action.heroes};
        case 'DELETE_HERO':
            return {...state, list: action.heroes};

        default:
            return state;
    }
}