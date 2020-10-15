function highAndLow(numbers){

    if(numbers === null){
      return null;
    }
    if(numbers === undefined){
      return undefined;
    }
    var arr = numbers.split(" ").map(Number);
    var largest = arr[0];
    var smallest = arr[0];
    var solution;
   for (var i = 1; i < arr.length; i++) {
     if (arr[i] > largest) {
       largest = arr[i];
     }
   }
   for (var i = 1; i < arr.length; i++) {
     if (arr[i] < smallest) {
       smallest = arr[i];
     }
   }
   solution=largest + " " + smallest;
   return solution;
 }
 
module.exports = highAndLow;