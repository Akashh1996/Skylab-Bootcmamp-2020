function disemvowel(str) {
    let array = str.split("")
    for (let i=0; i<array.length; i++) {
        if (array[i].toUpperCase() === "A" || array[i].toUpperCase() === "E" || array[i].toUpperCase() === "I" || array[i].toUpperCase() === "O" || array[i].toUpperCase() === "U") {
            array[i]=""
        }
    }
    array=array.join("")
    return array;
  }

  module.exports = disemvowel;