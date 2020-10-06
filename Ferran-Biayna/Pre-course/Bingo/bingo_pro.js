'use strict'

function bingo() {
    console.log('-- SKYLAB BINGO --')
    var i=true
    while(i===true) {
        name=prompt('Bienvenido a Skylab Bingo. ¿Cómo te llamas?','')
        if (name===null || name==='' || isNaN(name)===false) {
            alert('El valor introducido no es correcto. Vuelve a intentarlo')
        } else {
            console.log(`¡Un placer saludarte, ${name}!`)
            i=false
        }
    }
    passTurn()
    while(true) {
        var option=window.confirm(`${name}, ¿quieres volver a jugar?\nSI (Aceptar) / NO (Cancelar)`)
        if (option) {
            point=100
            turn=0
            ball=0
            numbers=[]
            bing=false
            line=false
            bingo()
        } else {
            return '¡Hasta Luego!'
        }
    }
}
function newBcard() {
    bcard.row1.splice(0,5)
    bcard.row2.splice(0,5)
    bcard.row3.splice(0,5)
    for (var i=0;i<5;i++) {
         var count1=0
        while(count1===0) {
            var count2=0
            var num=Math.floor(Math.random()*90)
            for (var j=0;j<=bcard.row1.length;j++) {
                if (num===bcard.row1[j] || num===0) {
                    count2=1
                }
            } if (count2===0) {
                count1=1
            }
        }
        bcard.row1.push(num)
    } for (var i=0;i<5;i++) {
        count1=0
        while(count1===0) {
            count2=0
            num=Math.floor(Math.random()*90)
            for (var j=0;j<=bcard.row2.length;j++) {
                if (num===bcard.row1[j] || num===bcard.row2[j] || num===0) {
                    count2=1
                }
            } if (count2===0) {
                count1=1
            }
        }
        bcard.row2.push(num);
    } for (var i=0;i<5;i++) {
        count1=0;
        while(count1===0) {
            count2=0
            num=Math.floor(Math.random()*90)
            for (var j=0;j<=bcard.row3.length;j++) {
                if (num===bcard.row1[j] || num===bcard.row2[j] || num===bcard.row3[j] || num===0) {
                    count2=1
                }
            } if (count2===0) {
                count1=1
            }
        }
        bcard.row3.push(num)
    }
    return `- Cartón -\n${bcard.row1.join(', ')}\n${bcard.row2.join(', ')}\n${bcard.row3.join(', ')}\n`
}
function newNumber() {
    while(true) {
        count1=0
        ball=Math.floor(Math.random()*90)
        for (var i=0;i<numbers.length;i++) {
            if (ball===numbers[i]) {
                count1=1
            }
        } if (ball!==0 && count1===0) {
            numbers.push(ball)
            return ball
        } 
    }
}
function newTurn() {
    turn++
    if (turn>15) {
        point-=1
    }
    console.log(`-- Turno ${turn} --`)
    ball=newNumber()
    console.log(`Bola con número ${ball}`)
    for (var i=0;i<5;i++) {
        if (bcard.row1[i]===ball) {
            bcard.row1[i]='X'
        } else if (bcard.row2[i]===ball) {
            bcard.row2[i]='X'
        } else if (bcard.row3[i]===ball) {
            bcard.row3[i]='X'
        } 
        var row1=bcard.row1.toString()
        var row2=bcard.row2.toString()
        var row3=bcard.row3.toString()
        if ((row1==='X,X,X,X,X' || row2==='X,X,X,X,X' || row3==='X,X,X,X,X') && line===false) {
            line=true
            console.log(`- Cartón -\n${bcard.row1.join(", ")}\n${bcard.row2.join(", ")}\n${bcard.row3.join(", ")}\n`)
            console.log(`¡LÍNEA! En el turno ${turn}`)
            return ''
        } if (row1==='X,X,X,X,X' && row2==='X,X,X,X,X' && row3==='X,X,X,X,X') {
            bing=true
            console.log(`- Cartón -\n${bcard.row1.join(", ")}\n${bcard.row2.join(", ")}\n${bcard.row3.join(", ")}\n`)
            console.log(`¡BINGO!\nEnhorabuena, has completado el bingo en ${turn} turnos y tu puntuación ha sido de ${point} puntos`)
            hallOfFame.push(`${name} - total de ${point} puntos`)
            console.log('-- Hall Of Fame --')
            console.log(hallOfFame.join('\n'))
            return ''
        }
    }
    console.log(`Este es el estado de tu cartón en el turno ${turn}`);
    console.log(`- Cartón -\n${bcard.row1.join(', ')}\n${bcard.row2.join(', ')}\n${bcard.row3.join(', ')}\n`);
}
function passTurn() {
    console.log('Este juego tiene un sistema de puntuación, a menor números necesarios para completar el bingo mayor será la puntuación final obtenida.\nSe empieza con un total de 100 puntos y por cada turno (a partir del 15), se restará 1 punto.\n¡Buena suerte!')
    console.log('Este es tu cartón')
    console.log(newBcard())
    i=true
    while (i===true) {
        var option=window.confirm('¿Quieres canviar el cartón?\nSI (Aceptar) / NO (Cancelar)')
        if (option) {
            console.log('Este es tu nuevo cartón')
            console.log(newBcard())
        } else {
            i=false;
        }
    }
    while (bing===false) {
        var option=window.confirm('¿Quieres pasar al siguiente turno?\nSI (Aceptar) / NO (Cancelar)')
        if (option) {
            newTurn()
        } else {
            console.log(`Este es el estado de tu cartón en el turno ${turn}`)
            console.log(`- Cartón -\n${bcard.row1.join(', ')}\n${bcard.row2.join(', ')}\n${bcard.row3.join(', ')}\n`)
        }
    }
}
var turn=0
var ball=0
var name
var point=100
var numbers=[]
var bing=false
var line=false
var bcard = {
    row1: [],
    row2: [],
    row3: []
}
var hallOfFame=[]
bingo()