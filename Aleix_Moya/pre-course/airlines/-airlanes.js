<!DOCTYPE html>
<html>
<head>
</head>
<body>

<script>
	var flights = [
    { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
    { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false }  ];
  var suma = 0;
  var contador = 0;
  var ultimosVuelos = [];
    
  var vuelos = { flights, suma, contador, ultimosVuelos };
  
  
    var usuario = prompt("Nombre de Usuario");
    if (usuario == null || usuario == "") {
      alert("debes introducir un nombre de usuario");
      main();
    } else {
      alert(`Bienvenido ${usuario}`);
      ultimosVuelos = flights.slice(6, flights.length);
      for (let i = 0; i < flights.length; i++) {
        suma = suma + flights[i].cost;
        if (flights[i].scale === true) {
          flights[i].scale = "hace escala";
          contador = contador + 1;
        } else {
          flights[i].scale = "no hace ninguna escala";
        }
        console.log(
          `Vuelo destinado a ${flights[i].to} con origen en ${flights[i].from} tiene un precio de ${flights[i].cost} y ${flights[i].scale}`
        );
      }
    }
    suma = suma / flights.length;
    console.log(`El precio medio de todos los vuelos es ${parseFloat(suma).toFixed(3)}`);
    console.log(`Los vuelos que hacen escala en el dia de hoy son ${contador}`);
    for (let j = 0; j < ultimosVuelos.length; j++) {
      console.log(ultimosVuelos[j].to);
    }
  </script>

</body>
</html>