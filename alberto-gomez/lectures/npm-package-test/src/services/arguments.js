//funcion (exports, module, require, __filename, __dirname) {

    
    function dynamicArgs(...args) {
        console.log(args)
    }
    
    dynamicArgs(1, 2, 3, 5, 1, 7)

    console.log('exports: ', exports)
    console.log('module:', module)
    console.log('require: ', require)
    console.log('__filename: ', __filename)
    console.log('__dirname: ', __dirname)
//}