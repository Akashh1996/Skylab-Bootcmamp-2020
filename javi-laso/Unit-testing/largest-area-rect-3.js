function largestRectangleInGrid(matrix) {

    
    //Hacer una matrix copia de la anterior
    const newMatrix = [];
    let newRow;
    for (let i = 0; i < matrix.length; i++) {
        newRow = [];
        for (let j = 0; j < matrix[0].length; j++) {
            newRow[j] = matrix[i][j];
        }
        newMatrix.push(newRow);
    }

    let maxArea = 0;
    let actualArea = 0;
    let areaCounter = 0;
    debugger;
    //Máxima área de la primera fila
    for (let mCol = 0; mCol < matrix[0].length; mCol++) {
        //Comprobar que no sea cero, si lo es, siguiente número y el máximo valor queda como área máxima de la fila
        if (matrix[0][mCol] === 0) {
            if (actualArea > maxArea) {
                maxArea = actualArea;
            }
            actualArea = 0;
            continue;
        }

        actualArea++;
    }

    if (actualArea > maxArea) {
        maxArea = actualArea;
    }

    //Actualizar las demás filas para contar alturas
    for (let mRow = 1; mRow < newMatrix.length; mRow++) {
        for (let mCol = 0; mCol < newMatrix[0].length; mCol++) {
            if (newMatrix[mRow][mCol] !== 0) {
                newMatrix[mRow][mCol] = newMatrix[mRow][mCol] + newMatrix[mRow - 1][mCol];
            }
        }
    }

    //Calcular el área de cada fila desde la segunda
    

    let stack = [];

    for (let i = 1; i < matrix.length; i++) {
        stack[i] = [];
        for (let j = 0; j < matrix[0].length; j++) {
            stack[i][j] = 0;
        }
    }

    let topStack;
    let areaWithTop;

    for (let mRow = 1; mRow < newMatrix.length; mRow++) {
        for (let mCol = 0; mCol < newMatrix[0].length; mCol++) {
            //Si el número es 0 no cuenta
            if (newMatrix[mRow][mCol] === 0) {
                break;
            }



        }
    }

    console.log(stack);
    console.log(newMatrix);



    return areaCounter;
}

module.exports = largestRectangleInGrid;