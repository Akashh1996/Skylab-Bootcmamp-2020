///////////// GAME-OF-LIFE /////////////////

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

        // S-W
        if (array[i + 1][k - 1] === 1) neighbours++;

        // S
        if (array[i + 1][k] === 1) neighbours++;

        // S-E
        if (array[i + 1][k + 1] === 1) neighbours++;

        // N-W
        if (array[i - 1][k - 1] === 1) neighbours++;

        // E
        if (array[i - 1][k] === 1) neighbours++;

        // SW
        if (array[i - 1][k + 1] === 1) neighbours++;

        // S
        if (array[i][k - 1] === 1) neighbours++;

        // SE
        if (array[i][k + 1] === 1) neighbours++;

        return neighbours;
    }
    // Comprobations
    for (i = 1; i < array.length - 1; i++) {
        for (k = 1; k < array.length - 1; k++) {
            // Comprobamos los vecinos
            knowNeighbours();
            ///Normas de la vida
            //Morir si superpopulation or underpopulation
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