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
            var scaleOrNot = "with a scale";
        } else if(flight.scale === false){
            scaleOrNot = "with no scale";
        }
        console.log("The flight to " + flight.to + " with ID " + flight.id + " from " + flight.from + " with a cost of " + flight.cost + " euros and " + scaleOrNot);
    })
};

const initAirlines = () => {
    let nameuser = prompt("Please enter your name");
    console.log("Nice to meet you " + nameuser + " and welcome to our airlines browser! \nOur flights for today are the following: ");
    printing(flights);
    loginPro();
};


// Pro Version
const myFlight = {}

const loginPro = () => {
    let adminOrUser = prompt("Please type if you are ADMIN or USER")
    if(adminOrUser == "" || adminOrUser == null) {
        exitBrowser();
    } else {
        let adminOrUserUP = adminOrUser.toUpperCase();
        if(adminOrUserUP == "ADMIN"){
            beingAdmin();  
        } else if(adminOrUserUP == "USER"){
            beingUser();
        } 
    }
};

const beingAdmin = () => {
    let choiceAdmin = prompt("Do you want to ADD a flight or REMOVE one?")
    if(choiceAdmin == null || choiceAdmin == "") {
        exitBrowser();
    } else { 
        let choiceAdminUp = choiceAdmin.toUpperCase();
        if(choiceAdminUp == "ADD") {
            addFlight();  
        } else if(choiceAdminUp == "REMOVE") {
            removeFlight();
        } 
    }
    let anotherChoiceAdmin = confirm("Do you want to use another Admin function?");
    if(anotherChoiceAdmin) {beingAdmin()}
    else if(anotherChoiceAdmin == false) {
        console.log("Here is the updated list: ");
        printing(flights);
        exitBrowser();
    }     
};

const addFlight = () => {      
    if(flights.length > 14) {
        alert("You're not allowed to introduce more flights!")
    } else {
        addID();
        addDestandOrig();
        addCost();
        addScale();  
        flights.push(myFlight) 
    } 
};

const addID = () => {
    let askid = true;
    while(askid) {
        var introduceID = prompt("Please type the ID of the flight");
        if(introduceID == null) {
            askid = false;
            exitBrowser();
        } else if (isNaN(parseInt(introduceID))) {
            alert("Please only numbers are allowed");
        } else {
            myFlight.id = parseInt(introduceID);
            askid = false;
        }
    }
}

const addDestandOrig = () => {
    let  askdestAndorig = true
    while(askdestAndorig) {
        let introduceDestiny = prompt("Introduce the destination");
        let introduceOrigin = prompt("Introduce the origin");
        if(introduceDestiny == null || introduceOrigin == null ) {
            askdestAndorig = false
            exitBrowser()
        }
        else if(isNaN(introduceDestiny) == false || isNaN(introduceOrigin) == false){
            alert("Please enter only letters!")
        } else { 
            myFlight.to = introduceDestiny; 
            myFlight.from = introduceOrigin;
            askdestAndorig = false
        }
    }
}

const addCost = () => {
    let askcost = true;
    while(askcost) {
        let introduceCost = prompt("Introduce the cost of the flight");
        if(introduceCost == null) {
            askcost = false;
            exitBrowser();
        } else if (isNaN(parseInt(introduceCost))) {
            alert("Please only numbers are allowed");
        } else {
            myFlight.cost = parseInt(introduceCost);
            askcost = false;
        }
    }
}

const addScale = () => {
    let introduceScale = prompt("Do you want this flight to have a scale? Yes or No");
    if(introduceScale == null) {
        exitBrowser();
    } else {
        let introduceScaleUp = introduceScale.toUpperCase();
        if (introduceScaleUp === "YES" || introduceScaleUp === "NO") {
            myFlight.scale = Boolean(introduceScaleUp == "YES" ? true : false);
        } else {
            alert("Only Yes or No will be accepted.");
            addScale()
        }
    }   
}

const removeFlight = () => {
    var flightRemoved = [];
    var flightID = prompt("Type the ID of the flight you want to remove");
    var flightToSupress = parseInt(flightID);
    flights.filter(function (flight, index) {
        if(flight.id == flightToSupress) {
            flightRemoved = flights.splice(index, 1);
        }
    });  
    console.log("You just removed : ");
    printing(flightRemoved);
};

const beingUser = () => {
    let choiceUser = prompt("Enter your next action : \n 1 - List from highest to lowest price \n 2 - List from lowest to highest \n 3 - Enter your price and we'll do the rest \n 4 - Buy a flight");
    
    switch(choiceUser) {
        case "1" : console.log("Here are the flights from highest to lowest : ") + printing(highestToLowest())
        break;
        case "2" : console.log("Here are the flights from lowest to highest : ") + printing(lowestToHighest())
        break;
        case "3" : enterPrice();
        break;
        case "4" : console.log("Thank you for buying: ") + printing(buyperID())
        break;
    }
    let anotherChoiceUser = confirm("Do you want to use another User function?");
    if(anotherChoiceUser) {beingUser()}
    else if (anotherChoiceUser == false) {exitBrowser();}
};

const highestToLowest = () => {
    return flights.sort((a, b) => {return b.cost - a.cost});
};


const lowestToHighest = () => {
    return flights.sort((a, b) => {return a.cost - b.cost});
};

const enterPrice = () => {
    let answerUser = prompt("Please enter your budget. We'll find a flight according to your price")
    let priceUser = parseInt(answerUser);
    
    let higherPrice = flights.filter(flights => flights.cost > priceUser);
    
    let lowerPrice = flights.filter(flights => flights.cost < priceUser);
    
    let samePrice = flights.filter(flights => flights.cost == priceUser);
    
    console.log("The flights more expensive than your budget : ");
    printing(higherPrice);
    console.log("The flights cheaper than your budget : ");
    printing(lowerPrice);
    console.log("The flights exactly in your budget range : ");
    printing(samePrice);
};


const buyperID = () => {
    let flightBought = []
    let flightID = prompt("please enter the ID of the flight you want to buy");
    let flightBuy = parseInt(flightID);
    return flightBought = flights.filter(flight => flight.id == flightBuy);
};

const exitBrowser = () => { 
    let choiceExit = confirm("Do you want to exit the program?");
    if(choiceExit) {alert("Thank you for using our browser!");}
    else if (choiceExit == false) {loginPro();}
};

initAirlines();