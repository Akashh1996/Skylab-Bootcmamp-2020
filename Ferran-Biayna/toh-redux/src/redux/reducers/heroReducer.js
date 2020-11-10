export default function heroReducer(state = [], action) {
    switch (action.type) {
        case 'GET_HEROES':
            return action.heroes
        case 'ADD_HERO':
            return [...state, action.hero];
        case 'DELETE_HERO':
            return state.filter((hero)=> hero.id !== action.hero.id);

        default:
            return state;
    }
}