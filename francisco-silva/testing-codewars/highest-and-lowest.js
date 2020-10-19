function highestAndLowest(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }
  
  document.write(highestAndLowest("1 2 3 4 5"))

  module.exports=highestAndLowest;