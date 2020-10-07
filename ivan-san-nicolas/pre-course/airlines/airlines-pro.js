function airlinesPro() {
  var flights = [{
      id: 0,
      to: 'Bilbao',
      from: 'Barcelona',
      cost: 1600,
      scale: false
    },

    {
      id: 1,
      to: 'New York',
      from: 'Barcelona',
      cost: 700,
      scale: false
    },

    {
      id: 2,
      to: 'Los Angeles',
      from: 'Madrid',
      cost: 1100,
      scale: true
    },

    {
      id: 3,
      to: 'Paris',
      from: 'Barcelona',
      cost: 210,
      scale: false
    },

    {
      id: 4,
      to: 'Roma',
      from: 'Barcelona',
      cost: 150,
      scale: false
    },

    {
      id: 5,
      to: 'London',
      from: 'Madrid',
      cost: 200,
      scale: false
    },

    {
      id: 6,
      to: 'Madrid',
      from: 'Barcelona',
      cost: 90,
      scale: false
    },

    {
      id: 7,
      to: 'Tokyo',
      from: 'Madrid',
      cost: 1500,
      scale: true
    },

    {
      id: 8,
      to: 'Shangai',
      from: 'Barcelona',
      cost: 800,
      scale: true
    },

    {
      id: 9,
      to: 'Sydney',
      from: 'Barcelona',
      cost: 150,
      scale: true
    },

    {
      id: 10,
      to: 'Tel-Aviv',
      from: 'Madrid',
      cost: 150,
      scale: false
    },
  ];
  var name = '';
  var escala = []; //To have a valid answer for the stopover's bools in flights. Used in stopover function!!
  var scaleNum = 0; //To know how many stopovers we have. Used in stopover function!!
  var average = 0; //To know all the flight's average
  var user = ''; //In order to not ask again for the permissions.
  var filterFlights = []; //To know the flights the user filtered and can buy. If a flight is not here, it can't be bought.

  function showFlights() {
    stopOver();
    clear();
    for (let i = 0; i < flights.length; i++) {
      console.log('The flight with id ' + flights[i].id + ' originating in ' + flights[i].from +
        ' and destination in ' + flights[i].to + ', has a cost of ' + flights[i].cost + '€' +
        ' and ' + escala[i] + ' stopover.');
    }
    return avPrice();
  }

  function stopOver() { //We need to transform the bool into a friendly answer to the user!! Used in showFlights function!!
    escala = []; //
    scaleNum = 0; //Reinitialize to empty
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].scale) { //If the bool is true, we add 'does'
        escala.push('does');
        scaleNum++;
      } else escala.push('does not'); //If the bool is false, we add 'does not'
    }
  }

  function avPrice() {
    average = 0;
    for (let i = 0; i < flights.length; i++) {
      average += flights[i].cost;
    }
    average /= flights.length;
    console.log('\n' + 'The average price of the flights is: ' + average.toFixed(2) + '€');
    console.log('The number of flights with stopover is: ' + scaleNum); //This is the total stepovers!!! Is here 'cause it doesn't need and entire function for a console log.
    return lastFlightDes();
  }

  function lastFlightDes() { //To show the last 5 flight destinations
    var lastFlights = [];
    for (let i = flights.length - 5; i < flights.length; i++) {
      lastFlights.push(flights[i].to);
    }
    console.log('\n' + 'The destiny of the last 5 flights are: ' + lastFlights.join(', '));
    return adminOrUser();
  }

  function adminOrUser() {
    while (user.toLowerCase() !== 'admin' && user.toLowerCase() !== 'user') {
      user = window.prompt('What are your permissions? \n Admin / User');
      if (user === null) {
        alert('Bye!');
      }
      if (user.toLowerCase() !== 'admin' && user.toLowerCase() !== 'user')
        alert('Insert a valid answer please');
    }
    if (user.toLowerCase() === 'admin') {
      return userIsAdmin();
    } else if (user.toLowerCase() === 'user') {
      return userIsUser();
    } else { //In case of user not being admin or user (some errors idk)
      alert('There was an error. Insert your permissions again please.');
      user = undefined;
    }
  }

  function userIsAdmin() {
    console.log('\n' + 'You have Admin permissions.');
    if (window.confirm('Do you want to create a new flight?')) {
      return newFlight();
    }
    if (window.confirm('Do you want to delete a flight?')) {
      return removeFlight();
    } else {
      alert('Bye!');
    }
  }

  function newFlight() {
    if (flights.length < 15) {
      let newFlights = {
        id: 0,
        to: '',
        from: '',
        cost: 0,
        scale: undefined
      };
      newFlights.id = flights.length; //If it's index is the length, it'll always be the last one
      for (let i = 0; i < flights.length; i++) { //If we have removed flights, the index and the length may not coincide. Check if the index is taken and adds 1.
        if (newFlights.id === flights[i].id) {
          newFlights.id++;
        }
      }
      do { //Use do while in order to not push empty flights.
        newFlights.from = window.prompt("Insert the flight's origin");
        if (
          typeof newFlights.from != 'string' ||
          newFlights.from[0] === undefined
        ) {
          alert('Please, enter a valid origin');
        }
      } while (typeof newFlights.from != 'string' || newFlights.from[0] === undefined); //An empty string still a string, we want a string with at least one character.
      do {
        newFlights.to = window.prompt("Insert the flight's destiny");
        if (typeof newFlights.to != 'string' || newFlights.to[0] === undefined) {
          alert('Please, enter a valid destiny');
        }
      } while (typeof newFlights.to != 'string' || newFlights.to[0] === undefined);
      do {
        newFlights.cost = Number(window.prompt("Insert the flight's cost"));
        if (isNaN(newFlights.cost)) {
          alert('Please, enter a valid number');
        }
      } while (isNaN(newFlights.cost));
      do {
        var stepover = window.prompt('The flight haves stepover? \n Yes/No').toLowerCase();
        if (stepover === 'yes' || stepover === 'y') newFlights.scale = true;
        else if (stepover === 'no' || stepover === 'n') newFlights.scale = false;
        else alert('Please, enter a valid answer');
      } while (newFlights.scale === undefined);
      flights.push(newFlights);
    } else {
      alert('The maximum number of flights is 15. Please, delete a flight before adding a new one.');
      return showFlights();
    }
  }

  function removeFlight() {
    var flightId;
    var flightRemoved;
    do {
      flightId = Number(
        window.prompt('Insert the id of the flight you want to remove')
      );
      if (isNaN(flightId)) {
        alert('Please, insert a valid number');
      }
    } while (isNaN(flightId));
    for (let i = 0; i < flights.length; i++) {
      if (flights[i].id === flightId) {
        flights.splice(i, 1);
        alert('Flight removed!');
        flightRemoved = true;
      }
    }
    if (flightRemoved === false)
      alert('Sorry, there are no flights with the id ' + flightId);
    return showFlights();
  }

  function userIsUser() {
    console.log('\n' + 'You have User permissions.');
    if (window.confirm('Do you want to filter the flights by cost?')) {
      do {
        var filter = window.prompt('Insert higher than, equal or lower than, and then put the price (no whitespaces)' +
          '\n' + 'Example: <500 (lower than 500)');
        var price = Number(filter.slice(1, filter.length));
        if (price < 0 || isNaN(price)) {
          alert('Please, enter a valid option');
        }
      } while (price < 0 || isNaN(price));
      do {
        if (filter.charAt(0) === '<') {
          clear();
          for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost < price) {
              console.log('The flight with id ' + flights[i].id + ' originating in ' + flights[i].from +
                ' and destination in ' + flights[i].to + ', has a cost of ' + flights[i].cost + '€' +
                ' and ' + escala[i] + ' stopover.');
              filterFlights.push(flights[i].id);
            }
          }
        } else if (filter.charAt(0) === '>') {
          clear();
          for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost > price) {
              console.log('The flight with id ' + flights[i].id + ' originating in ' + flights[i].from +
                ' and destination in ' + flights[i].to + ', has a cost of ' + flights[i].cost + '€' +
                ' and ' + escala[i] + ' stopover.');
              filterFlights.push(flights[i].id);
            }
          }
        } else if (filter.charAt(0) === '=') {
          clear();
          for (let i = 0; i < flights.length; i++) {
            if (flights[i].cost == price) {
              console.log('The flight with id ' + flights[i].id + ' originating in ' + flights[i].from +
                ' and destination in ' + flights[i].to + ', has a cost of ' + flights[i].cost + '€' +
                ' and ' + escala[i] + ' stopover.');
              filterFlights.push(flights[i].id);
            }
          }
        } else {
          alert('Please, enter a valid option');
        }
      } while (filter.charAt(0) !== '<' && filter.charAt(0) !== '>' && filter.charAt(0) !== '=');
      return buyFlight();
    } else {
      alert('Bye!');
    }
  }

  function buyFlight() {
    var thereIsFlight = false;
    if (filterFlights.length === 0) {
      alert('Sorry, there are no flights with your conditions. Try again, please');
      return showFlights();
    } else if (window.confirm('Do you want to buy one of these flights?')) {
      do {
        var choice = window.prompt("Insert the flight's id please");
        for (let i = 0; i < filterFlights.length; i++) {
          if (filterFlights[i] == choice) {
            thereIsFlight = true;
            alert('Thank you! You bought the flight with the id ' +
              filterFlights[i] + '\n' + 'Comeback soon!');
            clear();
            console.log("You bought the flight with it's origin in " + flights[i].from + " and it's destiny in " + flights[i].to +
              ' with a cost of ' + flights[i].cost + '€, and ' + escala[i] + ' stopover.' + '\n' + 'Enjoy your flight!');
          }
        }
        if (thereIsFlight === false) {
          alert('Please, enter a valid id from the filtered flights');
        }
      } while (thereIsFlight === false);
    } else {
      alert('Bye!');
    }
  }

  function logIn() {
    name = window.prompt('Insert your username please');
    if (name === null) {
      alert('Bye!')
    } else if (name === '') {
      alert('You must enter at least 1 character');
      return logIn();
    } else {
      alert('Welcome ' + name + '!')
      return showFlights();
    }
  }
  logIn();
}
airlinesPro();