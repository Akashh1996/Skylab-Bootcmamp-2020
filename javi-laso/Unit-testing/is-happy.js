function isHappy(n, pow) {
    const answer = [];
    let calculated = n;
    let number = 0;


    while(!answer.includes(n)) {
        number = 0;
        calculated = calculated.toString();
        for (let i = 0; i < calculated.length; i++) {
            number += Math.pow(calculated[i] * 1, pow);
        }
        answer.push(number);
        calculated = answer[answer.length - 1];

        if (answer.includes(1)) {
            return [1];
        } else if (number === n) {
            break;
        }
    }

    answer.unshift(n);
    return answer;
}

module.exports = isHappy;