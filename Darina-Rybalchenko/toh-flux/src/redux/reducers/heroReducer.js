export default function heroReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_HERO':
            return action.data;
        case 'ADD_HERO':
            return [...state, action.hero];
        case 'DELETE_HERO':
            return state.filter((hero) => hero.id !== action.hero.id)
        default:
            return state;
    }
}