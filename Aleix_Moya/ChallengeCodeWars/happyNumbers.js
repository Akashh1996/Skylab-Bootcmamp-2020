function isHappy(n, pow) {
    let currentNumber = n;
    let numbers = [];
    let unidades;
    let decenas;
    let centenas;
    numbers.push(currentNumber);
    
    if(currentNumber > 9){
      unidades = currentNumber%10;
      decenas = (currentNumber - currentNumber%10)/10;
      currentNumber = decenas*decenas + unidades*unidades;
      if(currentNumber > 99){
        unidades = currentNumber%10;
        centenas = (currentNumber - currentNumber%100);
        decenas = ((currentNumber - currentNumber%10)-(centenas*10))/10;
        currentNumber = centenas*centenas + decenas*decenas + unidades*unidades;
      }
    }else{
      currentNumber = currentNumber*currentNumber;
    }
    while(currentNumber !== n && currentNumber !== 1){
      numbers.push(currentNumber);
    
    if(currentNumber > 9){
      unidades = currentNumber%10;
      decenas = (currentNumber - currentNumber%10)/10;
      currentNumber = decenas*decenas + unidades*unidades;
      if(currentNumber > 99){
        unidades = currentNumber%10;
        centenas = (currentNumber - currentNumber%100);
        decenas = ((currentNumber - currentNumber%10)-(centenas*10))/10;
        currentNumber = centenas*centenas + decenas*decenas + unidades*unidades;
      }
    }else{
      currentNumber = currentNumber*currentNumber;
    }
    }
    if(currentNumber === 1){
      return [1];
    }else{
      return numbers;
    }
  }