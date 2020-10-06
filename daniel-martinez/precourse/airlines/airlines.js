var vuelos = [['Barcelona','Madrid',59.99,0],['Barcelona','Palma',40.00,0],['Barcelona','Londres',85.50,1],['Barcelona','Moscu',120.30,2],['Barcelona','Paris',49.99,0],['Barcelona','Atenas',180.00,1],['Barcelona','Amsterdam',99.99,0],['Barcelona','Estambul',210.00,1],['Barcelona','Dubai',210.00,2],['Barcelona','Málaga',34.99,0]];

function airlines(){
    var usuario = prompt('Introduzca su nombre de usuario:');
    if (usuario == null || usuario ==''){
        return alert('Debes introducir un nombre de usuario');
    }
    var costemedio = 0;
    var escalas = 0;
    var ultimos5 = [];
    console.log('¡Bienvenido '+ usuario+'!');
    console.log('Estos son los vuelos disponibles:');
    for (var i = 0; i < vuelos.length; i++){
        costemedio += vuelos[i][2];
        if (vuelos[i][3]!=0){
            escalas += 1;
        }
        if (i >= 5){
            ultimos5.push(vuelos[i][1]);
        }
        console.log('Origen: '+ vuelos[i][0]+ '    Destino: '+ vuelos[i][1] + '  -  ' + vuelos[i][2].toFixed(2) + '€, ' + vuelos[i][3] + ' escalas');
    }
    costemedio /= 10;
    console.log('El coste medio de los vuelos es de ' + costemedio.toFixed(2) + '€');
    console.log('Hay ' + escalas + ' vuelos que realizan escala.');
    console.log('Los últimos vuelos del dia tienen destino a: ' + ultimos5.join(', '));
}

airlines();