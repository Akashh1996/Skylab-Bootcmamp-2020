function validParentheses(parens){
    parensOpen = [];
    parensClos = []
    lastItem = parens.length-1;
    
    if(parens[0] === ")") {
      return false
    }
    if(parens[lastItem] === "(") {
      return false
    }  
      
   for (var i = 0; i < parens.length; i++) {
     if(parens[i] === '('){parensOpen.push(parens[i])}
     if(parens[i] === ')'){parensClos.push(parens[i])}
   }
   
   if(parensOpen.length === parensClos.length){
        return true
    } else { return false}
}

module.exports = validParentheses;