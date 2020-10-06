'use strict'

function game() {
    console.log('-- SKYLAB PASAPALABRA --')
    var i=true
    while(i===true) {
        var name=prompt('Bienvenido al Pasapalabra de Skylab.\n¿Cómo te llamas?')
        if (name==='' || isNaN(name)===false || name===null) {
            alert('¡El valor intoducido no es correcto!')
        } else {
            i=false
        }
    }
    console.log(`¡Un placer saludarte, ${name}`)
    var option=window.confirm('¿Empezamos?\nSI (Aceptar) / NO (Cancelar)')
    if (option) {
        pasapalabra(name)
    } else {
        var option2=window.confirm('¿Quieres cerrar el programa? Si tu respuesta es NO, se ejecutará el juego\nSI (Aceptar) / NO (Cancelar)')
        if (option2) {
            return
        } else {
            pasapalabra(name)
        }
    }
    option=window.confirm('¿Quieres volver a jugar?\nSI (Aceptar) / NO (Cancelar)')
    if (option) {
        for (var j=0;j<questions.length;j++) {
            questions[j].status=0
        }
        game()
    } else {
        return '¡Hasta Luego!'
    }
}
function pasapalabra(name) {
    point=0
    var answers=0
    while (answers<27) {
        for (var j=0;j<questions.length;j++) {
            var i=true
            if (questions[j].status===0) {
                var k=Math.floor(Math.random()*3)
                console.log(`${questions[j].options[k].question}`)
                while (i===true) {
                    var option=prompt('¿Cuál es tu respuesta?')
                    if (option==='' || isNaN(option)===false || option===null) {
                        alert('¡El valor intoducido no es correcto!')
                    } else {
                        i=false
                    }
                } 
                if (option.toUpperCase()===(questions[j].options[k].answer).toUpperCase()) {
                    console.log('¡Respuesta correcta!')
                    questions[j].status=1
                    point+=1
                    answers+=1
                } else if (option.toUpperCase()==='END') {
                    console.log('¡Partida terminada!')
                    console.log(`${name}, has respondido un total de ${answers} preguntas y has acertado ${point} de ellas`)
                    return
                } else if (option.toUpperCase()!=='PASAPALABRA') {
                    console.log('¡Respuesta incorrecta!')
                    questions[j].status=2
                    answers+=1
                } else {
                    console.log('¡Perfecto! Pasamos a otra pregunta')
                }
            }
        }
    }
    console.log(`¡Has terminado el juego! Has contestado correctamente ${point} preguntas y has fallado ${27-point}.\nTu puntuación ha sido de ${point}/27, ¡enhorabuena!`)
    hallOfFame.push(hall(name,point))
    hallOfFame.sort(function (a, b){
        return b.point - a.point;
    })
    console.log('- Hall Of Fame -')
    for (i=0;i<hallOfFame.length;i++) {
        console.log(`${hallOfFame[i].name} - ${hallOfFame[i].point} puntos`)
    }
}
var hall = (name,point) => {
    return {
        name:name,
        point:point
    }
}
var questions = [
    { letter: 'A', status: 0, options: [{ answer: 'Abducir', question: 'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien'}, { answer: 'Adn', question: 'CON LA A. Molécula portadora de la información genética'}, { answer: 'Agua', question: 'CON LA A. Formada por dos átomos de hidrógeno y uno de oxígeno'}] },
    { letter: 'B', status: 0, options: [{ answer: 'Bingo', question: 'CON LA B. Juego que ha sacado de quicio a todos los "Skylabers" en las sesiones de precurso'}, { answer: 'Barómetro', question: 'CON LA B. Aparato para medir la presión atomosférica'}, { answer: 'Balanza', question: 'CON LA B. Aparato que sirve para medir la masa'}] },
    { letter: 'C', status: 0, options: [{ answer: 'Churumbel', question: 'CON LA C. Niño, crío, bebé'}, { answer: 'Caries', question: 'CON LA C. Destrucción del diente por falta de higiene'}, { answer: 'Cristalizador', question: 'CON LA C. Material de laboratorio que sirve para cristalizar'}] },
    { letter: 'D', status: 0, options: [{ answer: 'Diarrea', question: 'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida'}, { answer: 'Densidad', question: 'CON LA D. Masa partido de volumen'}, { answer: 'Diluida', question: 'CON LA D: Disolución con muy poco soluto'}] },
    { letter: 'E', status: 0, options: [{ answer: 'Ectoplasma', question: 'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación'}, { answer: 'Enfermedad', question: 'CON LA E. Falta de salud'}, { answer: 'Elemento', question: 'CON LA E. Sustancia pura formada por átomos iguales'}] },
    { letter: 'F', status: 0, options: [{ answer: 'Facil', question: 'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad'}, { answer: 'Fumar', question: 'CON LA F. Hábito perjudicial para el aparato respiratorio'}, { answer: 'Falanges', question: 'CON LA F. Cada uno de los huesos de los dedos'}] },
    { letter: 'G', status: 0, options: [{ answer: 'Galaxia', question: 'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas'}, { answer: 'Genoma', question: 'CON LA G. Información genética de un ser vivo'}, { answer: 'Guindilla', question: 'CON LA G. Pimiento pequeño que pica mucho'}] },
    { letter: 'H', status: 0, options: [{ answer: 'Harakiri', question: 'CON LA H. Suicidio ritual japonés por desentrañamiento'}, { answer: 'Hidrógeno', question: 'CON LA H. Elemento químico de número atómico 1'}, { answer: 'Hielo', question: 'CON LA H. Agua sólida'}] },
    { letter: 'I', status: 0, options: [{ answer: 'Iglesia', question: 'CON LA I. Templo cristiano'}, { answer: 'Insectos', question: 'CON LA I. La mosca, la hormiga, la avispa y la abeja lo son'}, { answer: 'Inmiscible', question: 'CON LA I. Líquido que no se puede mezclar'}] },
    { letter: 'J', status: 0, options: [{ answer: 'Jabali', question: 'CON LA J. Variedad salvaje del cerdo que sale en la película "El Rey León", de nombre Pumba'}, { answer: 'Jueves', question: 'CON LA J. Día de la semana que siempre está en medio'}, { answer: 'Jeringa', question: 'CON LA J. Instrumento que sirve para inyectar líquidos'}] },
    { letter: 'K', status: 0, options: [{ answer: 'Kamikaze', question: 'CON LA K. Persona que se juega la vida realizando una acción temeraria'}, { answer: 'Kilogramo', question: 'CON LA K. Unidad de medida de masa'}, { answer: 'K', question: 'CON LA K. Símbolo de la constante de proporcionalidad en la ley de Coulomb'}] },
    { letter: 'L', status: 0, options: [{ answer: 'Licántropo', question: 'CON LA L. Hombre lobo'}, { answer: 'Leucipo', question: 'CON LA L. Filósofo griego que junto con Demócrito habló de la existencia del átomo'}, { answer: 'Lumbago', question: 'CON LA L. Dolor agudo y persistente en la región lumbar'}] },
    { letter: 'M', status: 0, options: [{ answer: 'Misántropo', question: 'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas'}, { answer: 'Mármol', question: 'CON LA M. Roca que se utiliza en la construcción'}, { answer: 'Materia', question: 'CON LA M. Asignatura o disciplina científica'}] },
    { letter: 'N', status: 0, options: [{ answer: 'Necedad', question: 'CON LA N. Demostración de poca inteligencia'}, { answer: 'Neutrón', question: 'CON LA N. Partícula subatómica sin carga eléctrica'}, { answer: 'Nutrientes', question: 'CON LA N: Moléculas sencillas necesarias para el metabolismo'}] },
    { letter: 'Ñ', status: 0, options: [{ answer: 'Señal', question: 'CON LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.'}, { answer: 'Dañar', question: 'CON LA Ñ. Causar dolor o molestia'}, { answer: 'Cigüeña', question: 'CON LA Ñ. Ave típica de nuestra tierra'}] },
    { letter: 'O', status: 0, options: [{ answer: 'Orco', question: 'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien'}, { answer: 'Oro', question: 'CON LA O. Elemento químico cuyo símbolo es Au'}, { answer: 'Obsidiana', question: 'CON LA O. Roca volcánica de color negro y brillo vítreo'}] },
    { letter: 'P', status: 0, options: [{ answer: 'Protoss', question: 'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft'}, { answer: 'Prodcutos', question: 'CON LA P. Sustancias finales en una reacción química'}, { answer: 'Pene', question: 'CON LA P. Órgano genital masculino'}] },
    { letter: 'Q', status: 0, options: [{ answer: 'Queso', question: 'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche'}, { answer: 'Queroseno', question: 'CON LA Q. Combustible en motores de avión'}, { answer: 'Química', question: 'CON LA Q. Ciencia que estudia las transformaciones de la materia'}] },
    { letter: 'R', status: 0, options: [{ answer: 'Raton', question: 'CON LA R. Roedor'}, { answer: 'Ribosomas', question: 'CON LA R. Orgánulo citoplasmático donde se fabrican proteínas'}, { answer: 'Radiología', question: 'CON LA R. Aplicación de los distintos tipos de radiaciones en el diagnóstico y tratamiento de las enfermedades'}] },
    { letter: 'S', status: 0, options: [{ answer: 'Stackoverflow', question: 'CON LA S. Comunidad salvadora de todo desarrollador informático'}, { answer: 'Superficie', question: 'CON LA S. Magnitud cuya unidad es el metro quadrado'}, { answer: 'Sólido', question: 'CON LA S. Estado de agregación en el que se encuentra la sal'}] },
    { letter: 'T', status: 0, options: [{ answer: 'Terminator', question: 'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984'}, { answer: 'Temperatura', question: 'CON LA T. Energía interna de los cuerpos'}, {answer: 'Tonelada', question: 'CON LA T. Mil kilogramos'}] },
    { letter: 'U', status: 0, options: [{ answer: 'Unamuno', question: 'CON LA U. Escritor y filósofo español de la generación del 98 autor del libro "Niebla" en 1914'}, { answer: 'Utensilio', question: 'CON LA U. Herramienta o instrumento'}, { answer: 'Unirse', question: 'CON LA U. Lo que hacen los átomos para formar compuestos'}] },
    { letter: 'V', status: 0, options: [{ answer: 'Vikingos', question: 'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa'}, { answer: 'Valle', question: 'CON LA V. Depresión entre dos montañas'}, {answer: 'Venus', question: 'CON LA V. 2º Planeta, por cercanía al Sol, del sistema solar'}] },
    { letter: 'W', status: 0, options: [{ answer: 'Sandwich', question: 'CON LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso'}, { answer: 'Whisky', question: 'CON LA W. Bebida alcohólica típica de Irlanda y Escocia'}, { answer: 'Hardware', question: 'CON LA W. Conjunto de elementos físicos o materiales de cualquier sistema informático'}] },
    { letter: 'X', status: 0, options: [{ answer: 'Botox', question: 'CON LA X. Toxina bacteriana utilizada en cirujía estética'}, { answer: 'Expanden', question: 'CON LA X. Cuando un gas se comprime, sus partículas se...'}, { answer: 'Extremadura', question: 'CON LA X. Comunidad Autónoma que hace frontera con Portugal'}] },
    { letter: 'Y', status: 0, options: [{ answer: 'Peyote', question: 'CON LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos'}, { answer: 'Y', question: 'CON LA Y. Cromosoma masculino'}, { answer: 'Raya', question: 'CON LA Y. Tipo de pez aplanado de la familia de los tiburones'}] },
    { letter: 'Z', status: 0, options: [{ answer: 'Zen', question: 'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional'}, { answer: 'Enzima', question: 'CON LA Z. Proteína que cataliza específicamente cada una de las reacciones bioquímicas del metabolismo'}, { answer: 'Zoólogo', question: 'CON LA Z. Biólogo especialista en animales'}] }, ]
var hallOfFame=[]
var point
game()