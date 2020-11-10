import { EventEmitter } from 'events';
import actionTypes from './../actions/actionTypes'
import dispatcher from './../dispatcher'

let _flightOption;

class FlightStore extends EventEmitter {

    addEventListener(callback) {
        this.on('CHANGE', callback);
    }

    removeEventListener(callback) {
        this.removeListener('CHANGE', callback);
    }

    emitChange() {
        this.emit('CHANGE');
    }

    getFlightsOptions() {
        return _flightOption;
    }
}

const flightStore = new FlightStore();

dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.LOAD_OPTIONS:
            debugger;
            _flightOption = action.data;
            flightStore.emitChange();
            break;
        default:
            break;
    }
});

export default flightStore


