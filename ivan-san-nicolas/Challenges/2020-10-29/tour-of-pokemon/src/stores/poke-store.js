import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';
const totalAmount = 893;

let _pokemons = [];
let _actualPokemon;

class PokeStore extends EventEmitter {
    getPokemons() {
        return _pokemons;
    }

    slicePokemons(amount) {
        if (!amount) {
            return _pokemons;
        } else {
            return _pokemons.slice(0, amount);
        }
    }

    getPokemonById() {
        return _actualPokemon;
    }

    addEventListener(callback) {
        this.on(CHANGE, callback);
    }

    removeEventListener(callback) {
        this.removeListener(CHANGE, callback);
    }

    emitChange() {
        this.emit(CHANGE);
    }

}

const pokeStore = new PokeStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.GET_POKEMONS:
            _pokemons = action.payload;
            pokeStore.emitChange();
            break;
        
        case actionTypes.GET_ACTUAL_POKEMON:
            _actualPokemon = action.payload;
            pokeStore.emitChange();
            break;
        
        default:
            break;
    }
});

export default pokeStore;