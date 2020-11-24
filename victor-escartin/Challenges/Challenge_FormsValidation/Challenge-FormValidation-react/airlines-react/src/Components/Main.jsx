import React from 'react';
import TypeFlight from './TypeFlight';
import DeparturesArrivals from './DeparturesArrivals';
import Calendar from './Calendar';
import BusinessTravel from './BusinessTravel';
import FindButton from './FindButton';

export default function Main(){



    return (
        <main>
            <div className="mainContent">
                <div className="pax">
                    <a href="">Book for 10+ passengers</a>
                </div>
                
                <TypeFlight />
                <DeparturesArrivals />
                <Calendar />
                <BusinessTravel />
                <FindButton />
            </div>
        </main>
        
    )
}