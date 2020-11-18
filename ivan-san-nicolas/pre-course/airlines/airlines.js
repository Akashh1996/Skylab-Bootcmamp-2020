function airlines() {
    var flights = [
      { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  
      { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  
      { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  
      { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  
      { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  
      { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
  
      { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  
      { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  
      { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  
      { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
  
      { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
    ];
    var escala = [];        //To have a valid answer for the stopover's bools in flights. Used in stopover function!!
    var scaleNum = 0;       //To know how many stopovers we have. Used in stopover function!!

    function stopOver() {   //We need to transform the bool into a friendly answer to the user!! Used in showFlights function!!
      for (i = 0; i < flights.length; i++) {
        if (flights[i].scale){          //If the bool is true, we add 'does'
          escala.push('does');
          scaleNum++;
        } 
        else escala.push('does not');   //If the bool is false, we add 'does not'
      }
    }

    function showFlights() {
      stopOver();
      for (var i = 0; i < flights.length; i++) {
        console.log("The flight originating in " + flights[i].from + " and destination in " + flights[i].to + ", has a cost of " + 
        flights[i].cost + "€" + " and " + escala[i] + " stopover.");
      }
    }

    function avPrice() {        //To know all the flight's average
      var average = 0;
      for (var i = 0; i < flights.length; i++) {
        average += flights[i].cost;
      }
      average /= flights.length;
      console.log("\n" + "The average price of the flights is: " + average.toFixed(3) + "€");
    }

    function lastFlightDes(){       //To show the last 5 flight destinations
      var lastFlights = [];
      for (var i = flights.length -1; i > flights.length - 6; i--){
        lastFlights.push(flights[i].to)
      }
      lastFlights.reverse();    //Backwards to show them in order, 'cause the FOR starts at the last position.
      console.log("\n" + "The destiny of the last 5 flights are: " + lastFlights.join(", "));
    }
  
    if (name = window.prompt('Insert your name please'))  alert('Welcome ' + name + '!');
    showFlights();
    avPrice();
    console.log("The number of flights with stopover is: " + scaleNum);
    lastFlightDes();
  }
  airlines();