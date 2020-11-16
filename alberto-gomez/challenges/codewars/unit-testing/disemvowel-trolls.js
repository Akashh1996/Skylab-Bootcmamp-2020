function disemVowel(str) {
    let x = '';
    let wrd = str.toLowerCase();
    for (i = 0; i < wrd.length; i++) {
        if (wrd[i] === 'a' || wrd[i] === 'e' || wrd[i] === 'i' || wrd[i] === 'o' || wrd[i] === 'u') {
            continue;
        } else {
            x += str[i];
        }
    }
    str = x;
    return str;
}

module.exports = disemVowel;