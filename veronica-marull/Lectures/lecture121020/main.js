function copyFile(original){
    debugger
    let copy= {
    id: original.id,
    meta: origin.meta
    }
    
    copy.meta.title = 'Copy of '+ orignal.meta.title;
    return copy;
    }
    
    
    const myFile = {
       id:1,
       meta: {
           title: 'js mola'
    }
    };
    
    copyFile(myFile);
    
    function copyFile(original){
    debugger
    let copy= {
    id: original.id,
    meta: Objetc.assign({}.original.meta),
    meta: {...original.meta}
    }
    
    copy.meta.title = 'Copy of '+ orignal.meta.title;
    return copy;
    }
    
    
    const myFlie = {
       id:1,
       meta: {
           title: 'js mola'
    }
    };
    
    copyFile(myFile);
    
    
    
    const a = 2;
    const b = "a";
    
    undefined
    function x(value) {
    if(typeof value === 'number') {console.log('es un numero')}
    if(typeof value === 'string') {console.log('es un string')}
    }
    //FUNCITONS
    let countDwarves = function() {return 7}
    let dwarves = countDwarves;
    console.log(dwarves);
    /*VM4766:3 ƒ () {return 7}*/


    //no imprime 7 porque no se invoco a la

