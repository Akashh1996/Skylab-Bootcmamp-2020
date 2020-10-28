import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';
import actionsTypes  from '../actions/action-types';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStore extends EventEmitter {
    getHeroes() {
        return _heroes; 
    }

    deleteHero(heroId) {
        return _heroes.filter((hero) => hero.id !== heroId);
    }

    updateHero(updatedHero) {
        return _heroes.map((hero) => {
            if(updatedHero.id)
        })
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

const heroStore = new HeroStore();

dispatcher.register((action)=> {
    switch(action.type) {
        case actionsTypes.LOAD_HEROES:
            _heroes = action.playload;
            heroStore.emitChange(); 
            break;
        case actionsTypes.DELETE_HERO:
            _heroes = heroStore.deleteHero(action.playload);
            heroStore.emitChange(); 
            break;
        case actionsTypes.ADD_HERO:
            _heroes = [..._heroes, action.playload];
            heroStore.emitChange();
            break; 
        case actionsTypes.UPDATE_HERO:
            _heroes = heroStore.updateHero(action.playload);
            heroStore.emitChange();  
            break;   
    }
})

export default heroStore; 