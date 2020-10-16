function disemvowel(str) {
    newString = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !== 'e' && str[i].toLowerCase() !== 'u' && str[i].toLowerCase() !== 'i' && str[i].toLowerCase() !== 'o') {
            newString += str[i]
        }
    }
    return newString;
}

module.exports = disemvowel;