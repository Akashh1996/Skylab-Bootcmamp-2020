function pigIt(str){
    return str.split(' ').map ((word) => {
        if(word === '!' || word === '?') {
            return word;
        } else {
            return word.substr(1) + word[0] + 'ay';
        }
    }).join(' ');
}
  
module.exports = pigIt; 