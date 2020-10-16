 let numberArray;
function isHappy(n) {

    numberArray=n.split('');
    numberArray.forEach(element => function(element){
       let signleNum = parseInt(element)
        return signleNum*signleNum;
    });

}
isHappy('7');
console.log(numberArray);
module.exports = isHappy;