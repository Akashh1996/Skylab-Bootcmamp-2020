import { EventEmitter } from 'events';
import dispatcher from './../dispatcher'

let _hero;

class HeroStore extends EventEmitter {
    addEventListener(callback) {
        this.on('CHANGE', callback)
    }

    removeEventListener(callback) {
        this.on('CHNAGE', callback)
    }

    emitChange() {
        this.emit('CHANGE')
    }

    getHero() {
        return _hero
    }

}

const heroStore = new HeroStore()

dispatcher.register((action) => {
    debugger
    switch (action.type) {
        case 'LOAD_HERO':
            _hero = action.data;
            heroStore.emitChange();
            break;

        default: break;
    }
})

export default heroStore;