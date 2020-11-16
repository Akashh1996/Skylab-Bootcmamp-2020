import { EventEmitter } from "events"
import dispatcher from "../dispatcher"

let _trips;

class Trips extends EventEmitter {
    debugger;
    addEventListener(callback) {
        this.on("CHANGE", callback)
    }
    removeEventListener(callback) {
        this.removeListener("CHANGE", callback)
    }
    emitChange() {
        this.emit("CHANGE")
    }
    getTrips() {
        return _trips
    }

}

const trips = new Trips();

dispatcher.register((action) => {
    switch (action.type) {
        case "LOAD_TRIPS":
            _trips = action.data;
            trips.emitChange()
            break;

        default:
            break;
    }
})

export default trips