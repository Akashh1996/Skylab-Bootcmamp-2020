function disemvowel(str) {
    let provisionalString = "";
    if(typeof str !== "number"){
        for(var i = 0; i<str.length; i++){
            if((str[i].toLowerCase() !== "a" && str[i].toLowerCase() !== "e" && str[i].toLowerCase() !== "i" && str[i].toLowerCase() !== "o" && str[i].toLowerCase() !== "u")){
                provisionalString+=str[i];
            }  
        }
      return provisionalString;
    }
}

module.exports = disemvowel

/*
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
*/