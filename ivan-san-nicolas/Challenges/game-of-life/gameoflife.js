function gameOfLife(array) {
    let finalArray = new Array(17);
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i] = new Array(34);
    }
    for (let i = 0; i < finalArray.length; i++) {
        for (let k = 0; k < finalArray[i].length; k++) {
            finalArray[i][k] = 1;
        }
    }
    let neighbours = 0;

    function knowNeighbours() {

        if (array[i + 1][k - 1] === 1) neighbours++;
        if (array[i + 1][k] === 1) neighbours++;
        if (array[i + 1][k + 1] === 1) neighbours++;
        if (array[i - 1][k - 1] === 1) neighbours++;
        if (array[i - 1][k] === 1) neighbours++;
        if (array[i - 1][k + 1] === 1) neighbours++;
        if (array[i][k - 1] === 1) neighbours++;
        if (array[i][k + 1] === 1) neighbours++;
        return neighbours;
    }
    for (i = 1; i < array.length - 1; i++) {
        for (k = 1; k < array.length - 1; k++) {
            knowNeighbours();
            if (array[i][k] === 1 && (neighbours > 3 || neighbours < 2)) {
                finalArray[i][k] === 0;
            } else if (array[i][k] === 1 && (neighbours === 3 || neighbours === 2)) {
                finalArray[i][k] = 1;
            } else if (array[i][k] === 0 && neighbours === 3) {
                finalArray[i][k] = 1;
            }
            neighbours = 0;
        }
    }
    return finalArray;
}

let initialArray = [
    [2, 2, 2, 2, 2, 2, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 1, 1, 1, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2]
];

gameOfLife(initialArray);

module.exports = gameOfLife;