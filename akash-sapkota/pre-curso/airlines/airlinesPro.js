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

   function addFlights(){
        if(flights.length < 16){
            let newId
            let newDestination
            let newOrigin
            let newCost
            let newScale
            let newFlights
            let txt = ""
    
            do {
                id = prompt("Enter the ID");
                if (id !== '') {
                    newId = id
                }
            } while ( id === '' || isFinite(id) === false)
    
            do {
                destination = prompt("Enter the destination");
                if (destination !== '') {
                    newDestination = destination
                }
            } while ( destination === '' || isFinite(destination) === true)
            do {
                origin = prompt("Enter the origin");
                if (origin !== '') {
                    newOrigin = origin
                }
            } while (origin === '' || isFinite(origin) === true)
            do {
                cost = prompt("Enter the cost");
                if (cost !== '') {
                    newCost = cost
                }
            } while (cost === '' || isFinite(cost) === false)
    
            let scale = confirm("Do the flight have scale?")
            if(scale === true){
                newScale = true
            }else if(scale === false){
                newScale = false
            }
           if(newScale){
                txt = "with a scale"
            }else{
                txt = "without scales"
            }
            newFlights = {
                id : newId,
                to : newDestination,
                from : newOrigin,
                cost : newCost,
                scale : newScale
            }
            flights.push(newFlights)

            alert(`you have added a new flight with ID ${newId} from ${newOrigin} to ${newDestination} for ${newCost} with ${txt}`)
            let moreFlight = prompt("do you want to add more flights ? \n 1.yes \n 2. No")
            if(moreFlight === "1"){
                addFlights()
            }else if(moreFlight === "2"){
                return
            }
            
        }else{
            console.log("No more flights can be added");
        }
    } 
    function deleteFlights(){
    let idremove = prompt("enter an id to delete the flight")
    if(idremove === "" || isFinite(idremove) === false){
        deleteFlights()
    }else if(isFinite(idremove) === true){
    for (let index = 0; index < flights.length; index++) {
            if(idremove == flights[index].id){
                alert(`you have deleted flight with Id ${idremove} from ${flights[index].from} to ${flights[index].to} with a price of ${flights[index].cost}`);
                 flights.splice(index,1)
                 break
        
            }
        }
    }
}
    function expensiveFlights(){
        let expensive = 0
        for (let index = 0; index < flights.length; index++) {
            if(flights[index].cost > expensive){
                expensive = flights[index].cost
                console.log(`The expensive flights from ${flights[index].from} to ${flights[index].to} with price ${flights[index].cost} and id ${flights[index].id}`);
                console.log("Thank you for buying!!");
            }
        }
    }
    
    function cheapFlights(){
        let cheap = flights[0].cost
        for (let index = 1; index < flights.length; index++) {
            if(flights[index].cost < cheap){
                cheap = flights[index].cost
                console.log(`The cheapest flights from ${flights[index].from} to ${flights[index].to} with price ${flights[index].cost} and id ${flights[index].id}`);
                console.log("Thank you for buying!!");
    
            }
    
        }
    }
    
    function samePrice(){
        let selectedPrice = Number(prompt("Enter the price"))
        if(typeof(selectedPrice === "number")){
            for (let index = 0; index < flights.length; index++) {
                if(flights[index].cost === selectedPrice){
                    console.log(`The flight with same price from ${flights[index].from} to ${flights[index].to} with price ${flights[index].cost} and id ${flights[index].id}`);
                }
            }
        }
    }
    
    function airLinesPro(){
        greet()
        let option = prompt("Are you an admin or user?\n 1.admin \n 2.user")
        if(option === "1"){
            let optionAdmin = prompt("what operation do you want to perform? \n 1. Add flights \n 2. Delete flights")
            if(optionAdmin === "1"){
                addFlights()
            }else if(optionAdmin === "2"){
                deleteFlights()
            }
        }else if(option === "2"){
            let prices = prompt("do you want the \n 1. Cheat flights \n 2.Expensive Flights  \n 3. Same price")
            if(prices === "1"){
                cheapFlights()
            }else if(prices === "2"){
                expensiveFlights()
            }else if(prices === "3"){
                samePrice()
            }
        }
    
    }    

    function greet(){
        let greetings = prompt("Enter your name or jump to admin/user")
        if(isFinite(greetings) === true && greetings !=="" && greetings !== null){
            alert("you cant enter a number")
            greet()
        }else if(greetings === "" ){
            alert("you must enter your name")
            greet()
        }else if(greetings === null || greetings === ""){
            return
        }else{
            alert("Welcome to skylab airlines")
        }
    }

    airLinesPro()




 


