function deepClone(argument){
    const clone = Object.assign({}, argument);
    if(argument === undefined){
        return undefined;
    } else{
        let ReClone = JSON.parse(JSON.stringify(argument));
        return ReClone;
    }
}

module.exports = deepClone;