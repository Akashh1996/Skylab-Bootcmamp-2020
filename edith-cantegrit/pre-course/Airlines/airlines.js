var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
    
const printing = (obj) => {
    obj.forEach(function(flight) {
        if(flight.scale === true) {
            var scaleOrNot = "has a scale";
        } else if(flight.scale === false){
            scaleOrNot = "has no scale";
        }
        console.log("The flight to " + flight.to + " from " + flight.from + " has a cost of " + flight.cost + " euros and " + scaleOrNot);
    })
}

const initAirlines = () => {
    let nameuser = prompt("Please enter your name");
    console.log("Nice to meet you " + nameuser + " and welcome to our airlines browser! \nOur flights for today are the following: ");
    printing(flights);
    userChoices();
}



const userChoices = () => {
    let choices = ["Type: \n 1 - To consult the average cost of the flights \n 2 - To see how many flights have a scale \n 3 - To see the last 5 flights of the day"];

    let optionUser = prompt(choices);
    switch(optionUser) {
        case "1":
        console.log("The average cost for a flight today is " + averageCost() + " euros");
        break;
        case "2":
        console.log("The flights for today that have scales are the following: ");
        printing(flightsScales())
        break;
        case "3": 
        console.log("The 5 last flights we offer are: ")
        lastFlights().forEach(function(flight) {console.log(flight);})
    }
    let anotherChoice = confirm("Do you want to check another thing?");
    if(anotherChoice) {userChoices()} else {console.log("Thank you for using the browser!")}
}


const averageCost = () => {
    let sumPrices = flights.reduce((accumulator, flights) => accumulator + flights.cost, 0);
    return parseInt(sumPrices / flights.length);
}


const flightsScales = () => flights.filter(flights => flights.scale == true);


const lastFlights = () => flights.slice(-5).map(flight => flight.to);



initAirlines();