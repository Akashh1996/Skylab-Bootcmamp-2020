function disemvowel(str) {
    let string = str;
    let stringWithoutVowels = "";
  
    for (let i = 0; i < string.length; i++) {
      
      switch (string[i].toLowerCase()) {
          case 'a':
            continue;
          case 'e':
            continue;
          case 'i':
           continue;
          case 'o':
            continue;
          case 'u':
            continue;
          default:
            stringWithoutVowels+= string[i] ;  
          
      }
    }
  
  return stringWithoutVowels;
}

module.exports = disemvowel;