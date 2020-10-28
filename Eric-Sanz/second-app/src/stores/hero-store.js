import dispatcher from '../dispatcher'

let _hero;

class HeroStore {

    getHeroes() {
        return _hero;
    }

    addEventListener(callback) {

    }

    removeEventListerne() {

    }

    emitChange() {
        this.emit('CHANGE')
    }

}

dispatcher.register((action) => {
    switch(action.type) {
        case 'LOAD_HERO':
            _hero = action.data;
            heroStore.emitChange();
            break;
        default:
            break;
    }
})

const heroStore = new HeroStore();

export default heroStore;