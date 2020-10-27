function disemvowel(str) {
    let newStr = '';
    str.split('');
    for (let i in str) {
        switch (str[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            default:
                newStr += str[i];
                break;

        }
    }
    return newStr;
}

module.exports = disemvowel;