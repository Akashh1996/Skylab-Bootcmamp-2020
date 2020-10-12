function copyFile(original) {
    debugger
    let copy = {
        id: original.id,
        meta: {...original.meta} // Apunta a un objeto que contiene la propiedad meta de original
    }

    copy.meta.title='Copy of ' + original.meta.title;
    
    return copy;
}

const myFile = {
    id: 1,
    meta: {
        title: 'JS mola'
    }
};

copyFile(myFile)

// Los objetos son mutables, por lo que si se apunta a un valor desde distintas variables y el valor cambia; esos objetos apuntaran al nuevo valor
// Para solucionar esto, es interesante apuntar a un nuevo objeto y que contenga la propiedad x

// VER CIRCULO VALORES PRIMITIVOS / OBJECTS & FUNCTIONS