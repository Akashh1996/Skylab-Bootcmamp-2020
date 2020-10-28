import dispatcher from './dispatcher';



const formInformation = {
    flightOptions: [`Ida`, 'Vuelta', 'Ida y vuelta'],
    passengersOptions: ['1 pasajero', '2 pasajeros', '3 pasajeros', '4 pasajeros', '5 pasajeros'],
    fligthClass: ['Economy', 'Premium Economy', 'Business', 'La Premiere']
}

export function loadInfo(){
    dispatcher.dispatch(()=> {
        
    })
}