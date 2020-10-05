'use strict'

// Funciones versión NO PRO

function vuelos(flights) {
    for (var i=0;i<flights.length;i++) {
        if (flights[i]==false) {
            console.log("");
        }
        else if (flights[i].scale) {
            console.log(`El vuelo id ${flights[i].id}, con origen: ${flights[i].from} y destino: ${flights[i].to}, tiene un coste de ${flights[i].cost}€ y realiza escala`);
        } else {
            console.log(`El vuelo id ${flights[i].id}, con origen: ${flights[i].from} y destino: ${flights[i].to}, tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala`);
        }
    }
    return "";
}

function coste(flights) {
    var cs=0;
    for (var i=0;i<flights.length;i++) {
        cs+=flights[i].cost;
    }
    return `El coste medio de los vuelos de hoy es de ${cs/(i-=1)}€`;
}

function ultimos(flights) {
    var ar=[];
    for (var i=0;i<flights.length;i++) {
        ar.push(flights[i].to);
    }
    return `Los destinos de los últimos vuelos del día son a ${ar.slice(-5,-4)}, ${ar.slice(-4,-3)}, ${ar.slice(-3,-2)}, ${ar.slice(-2,-1)} y ${ar.slice(-1)}`;
}

// Funciones versión PRO - ADMIN

function admin(flights) {
    while (true) {
        var n = Number(prompt("Bienvenido al menú ADMIN. ¿Qué quieres hacer?\n1) Añadir Vuelo\n2) Eliminar Vuelo\n3) Salir"));
        if (n==1) {
            console.log(añadir(flights));
        } else if (n==2) {
            console.log(eliminar(flights));
        } else if (n==3) {
            return "¡Hasta Luego!";
        } else {
            console.log("El carácter introducido no es válido, vuelve a intentarlo");
        }
    }
}

function NuevoVuelo(id,to,from,cost,scale) {
    this.id=id;
    this.to=to;
    this.from=from;
    this.cost=cost;
    this.scale=scale;
}

function añadir(flights) {
    i=true;
    if (flights.length==15) {
        alert("El total de vuelos en la lista es 15. No es posible introducir nada más");
        return
    } else {
        var id=flights.length;
        while (i==true) {
            var to=prompt("Introduce el destino del nuevo vuelo:","");
            if (to=="" || to==null || isNaN(to)==false) {
                console.log("El valor introducido no es válido, vuelve a intentarlo.");
            } else {
                i=false;
            }
        } i=true;
        while (i==true) {
            var from=prompt("Introduce el origen del nuevo vuelo:","");
            if (from=="" || from==null || isNaN(from)==false) {
                console.log("El valor introducido no es válido, vuelve a intentarlo.");
            } else {
                i=false;
            }
        } i=true;
        while (i==true) {
            var cost=Number(prompt("Introduce el coste del nuevo vuelo (en €):",""));
            if (cost=="" || cost==null || isNaN(cost)==true) {
                console.log("El valor introducido no es válido, vuelve a intentarlo.");
            } else {
                i=false;
            }
        }
        var scale=window.confirm("Indica si el nuevo vuelo realiza escala (Aceptar) o no realiza escala (Cancelar)","");
        new NuevoVuelo(id,to,from,cost,scale);
        flights.push(new NuevoVuelo(id,to,from,cost,scale));
        console.log("\n-- Lista de Vuelos ACTUALIZADA --\n");
        console.log(vuelos(flights));
        return "";
    }
}

function eliminar(flights) {
    if (flights.length==0) {
        alert("No hay ningún vuelo en la lista, no es posible eliminar nada");
        return "";
    } else {
        while(true) {
            var n=Number(prompt("Introduce ID:",""));
            if (n=="" || n==null || isNaN(n)==true) {
                console.log("El valor introducido no es válido, vuelve a intentarlo");
            } else {
                for (var i=0;i<flights.length;i++) {
                    if (flights[i].id===n) {
                        flights.splice([i],1);
                        console.log("\n-- Lista de Vuelos ACTUALIZADA --\n");
                        console.log(vuelos(flights));
                        console.log("¡Vuelo eliminado correctamente!");
                        return "";
                    }
                }
                console.log("No existe ningún vuelo que coincida con el id introducido");
                return "";
            }
        }
    }
}

// Funciones versión PRO - USER

function caro(flights) {
    var acc=flights[0].cost
    var s=`El vuelo id ${flights[0].id} con destino ${flights[0].to}, origen ${flights[0].from} y con un coste de ${flights[0].cost}€ es el más caro`;
    for (var i=1;i<flights.length;i++) {
        if (flights[i].cost>acc) {
            acc = flights[i].cost;
            s=`El vuelo id ${flights[i].id} con destino ${flights[i].to}, origen ${flights[i].from} y con un coste de ${flights[i].cost}€ es el más caro`;
        }
    }
    return s;
}

function barato(flights) {
    var acc=flights[0].cost;
    var s=`El vuelo id ${flights[0].id} con destino ${flights[0].to}, origen ${flights[0].from} y con un coste de ${flights[0].cost}€ es el más barato`;
    for (var i=1;i<flights.length;i++) {
        if (flights[i].cost<acc) {
            acc = flights[i].cost;
            s=`El vuelo id ${flights[i].id} con destino ${flights[i].to}, origen ${flights[i].from} y con un coste de ${flights[i].cost}€ es el más barato`;
        }
    }
    return s;
}

function iguales(flights) {
    var acc=[];
    var s=[];
    for (var i=0;i<flights.length;i++) {
        for (var j=0;j<flights.length;j++) {
            if (flights[j].cost==flights[i].cost && i!=j && acc.includes(flights[j].id)==false) {
                acc.push(flights[j].id);
                s.push(`el vuelo id ${flights[j].id} con un coste de ${flights[j].cost}€`);
            }
        }
    }
    return `Los vuelos con el mismo coste son: ${s.join(", ")}`;
}

function compra(flights) {
    var acc = Number(prompt("Introduce el ID del vuelo que quieres comprar",""));
    for (var i=0;i<flights.length;i++) {
        if (flights[i].id==acc) {
            return `¡Genial! Has comprado pasaje para el vuelo id ${flights[i].id} con destino ${flights[i].to}, origen ${flights[i].from} y con un coste de ${flights[i].cost}€`;
        }
    }
    return "El ID introducido no coincide con ningún vuelo existente";
}

function user(flights) {
    while (true) {
        var n = Number(prompt("Bienvenido al menú USER. ¿Qué quieres hacer?\n1) Buscar vuelo más caro\n2) Buscar vuelo más barato\n3) Buscar vuelos mismo precio\n4) Buscar por ID\n5) Salir"));
        if (n==1) {
            console.log(caro(flights));
        } else if (n==2) {
            console.log(barato(flights));
        } else if (n==3) {
            console.log(iguales(flights));
        } else if (n==4) {
            console.log(compra(flights));
        } else if (n==5) {
            return "¡Hasta luego!"
        } else {
            console.log("El carácter introducido no es válido, vuelve a intentarlo");
        }
    }
}

// Instrucciones versión NO PRO

var flights = [
    {id:00, to:'Bilbao', from:'Barcelona', cost:1600, scale:false},
    {id:01, to:'New York', from:'Barcelona', cost:700, scale:false},
    {id:02, to:'Los Angeles', from:'Madrid', cost:1100, scale:true},
    {id:03, to:'Paris', from:'Barcelona', cost:210, scale:false},
    {id:04, to:'Roma', from:'Barcelona', cost:150, scale:false},
    {id:05, to:'London', from:'Madrid', cost:200, scale:false},
    {id:06, to:'Madrid', from:'Barcelona', cost:90, scale:false},
    {id:07, to:'Tokyo', from:'Madrid', cost:1500, scale:true},
    {id:08, to:'Shangai', from:'Barcelona', cost:800, scale:true},
    {id:09, to:'Sydney', from:'Barcelona', cost:150, scale:true},
    {id:10, to:'Tel-Aviv', from:'Madrid', cost:150, scale:false} ];

console.log("-- SKYLAB AIRLINES --");
console.log("\n")
console.log("Bienvenido a Skylab Airlines.")
var i=true;
while (i==true) {
    var nombre=prompt("¿Cómo te llamas?","");
    if (nombre=="" || nombre==null || isNaN(nombre)==false) {
        console.log("El valor introducido no es correcto, vuelve a intentarlo.");
    } else {
        console.log(`Un placer saludarte, ${nombre}.`);
        console.log("\n");
        console.log("-- Lista de Vuelos --");
        console.log(vuelos(flights));
        console.log(coste(flights));
        console.log(ultimos(flights));
        console.log("\n");
        i=false;
    }
}

// Instrucciones versión PRO

i=true;
while (i==true) {
    var tipo=prompt(`${nombre}, ¿eres ADMIN o USER?`,"").toUpperCase();
    if (tipo!=="ADMIN" && tipo!=="USER") {
        console.log("El valor introducido no es correcto, vuelve a intentarlo.");
    } else if (tipo=="ADMIN") {
        console.log(admin(flights));
        i=false;
    } else if (tipo=="USER") {
        console.log(user(flights));
        i=false;
    } 
}