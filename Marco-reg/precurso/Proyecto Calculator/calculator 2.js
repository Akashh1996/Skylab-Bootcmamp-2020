
function calculator(num1,num2){
    if (isNaN(num1)&&isNaN(num2)){

    return 'Debes introducir solo números'
  }
  
  
  else if(num2==null){
    return Math.round(Math.sqrt(num1) * 100) / 100;
  }
  else if(num1==null){
    return Math.round(Math.sqrt(num2) * 100) / 100;
  }
        
  return  [num1+num2,num1-num2,num1*num2,Math.round((num1/num2) * 100) / 100];  

}

console.log(calculator(1000,560));





