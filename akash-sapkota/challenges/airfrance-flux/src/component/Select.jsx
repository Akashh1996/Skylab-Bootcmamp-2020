import trips from "../store/FlightOptions"
import React, { useEffect, useState } from "react"
import { loadTrips } from "../actions/action-creators"



function SelectTrips() {
    const [flightOptions, setFlightOptions] = useState(null)

    useEffect(() => {
        debugger
        trips.addEventListener(onChange)
        loadTrips();

        return () => {
            trips.removeEventListener(onChange)
        };
    });


    function onChange() {
        setFlightOptions(trips.getTrips())
    }
    return (
        <>
            <select>
                {flightOptions &&
                    flightOptions.map((currentOption) => {
                        return <option>{currentOption}</option>;
                    })}
            </select>
        </>
    )
}
export default SelectTrips;

