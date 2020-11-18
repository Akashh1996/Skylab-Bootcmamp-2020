function disemvowel(text) {
    newText = text.replace(/[aeiou]/gi,'');
    return newText;
};

module.exports = disemvowel; 