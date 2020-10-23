function highAndLow(str) {
    let array = str.split(" ")
    let numbersHigh=array.sort(function (b, a) {
      return b - a;
    });
    numbersHigh=numbersHigh[0]

    let numbersLow=array.sort(function (b, a) {
      return a - b;
    });
    numbersLow=numbersLow[0]

    return `${numbersLow} ${numbersHigh}`
}

  module.exports = highAndLow;