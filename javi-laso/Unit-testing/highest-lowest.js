function highAndLow(numbers){
    const numbersSeparated = numbers.split(' ');
    const answer = [numbersSeparated[0], numbersSeparated[1]];
    debugger;
    let number;

    if (numbersSeparated.length === 1) {
        return `${numbersSeparated[0]} ${numbersSeparated[0]}` ;
    }
    
    for (number in numbersSeparated) {
        numbersSeparated[number] = parseInt(numbersSeparated[number]);
        if (numbersSeparated[number] >= answer[0]) {
            answer[0] = numbersSeparated[number];
        }
        
        if (numbersSeparated[number] <= answer[1]) {
            answer[1] = numbersSeparated[number];
        }
    }

    return answer.join(' ');
}

module.exports = highAndLow;