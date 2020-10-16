function disemvowel(str) {
  
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var answer = [];
    
    for (var i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase())) {
        answer.push(str[i]);
      }
    }
    
    return answer.join('');
}

module.exports = disemvowel;