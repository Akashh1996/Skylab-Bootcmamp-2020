function pigIt(str){
    return str.split(' ').map((word) => word.match(/^[0-9a-zA-Z]+$/) ? word.slice(1) + word.charAt(0) + 'ay' : word).join(' ');
}

module.exports = pigIt;