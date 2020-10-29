import EventEmitter from 'events';
import dispatcher from '../dispatcher/dispatcher';
import typeActions from '../actions/type-actions';

const CHANGE = 'CHANGE';
let _heroes = [];

class HeroStore extends EventEmitter{

    getHeroes() {
        return _heroes;
    }

    addEventListener(callback){
        this.on(CHANGE, callback); 
    }

    removeEventListener(callback){
        this.removeListener(CHANGE, callback);
    }

    emitChange(){
        this.emit(CHANGE,);
    }
}

const storeHeroes = new HeroStore();

dispatcher.register((action)=> {
    switch (action.type) {
        case typeActions.LOAD_HEROES:
            _heroes = action.data
            storeHeroes.emitChange();
            break;
    
        default:
            break;
    }
})


export default storeHeroes;