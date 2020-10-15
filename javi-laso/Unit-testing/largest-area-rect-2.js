function largestRectangleInGrid(matrix) {

    let colCounter;
    let rowCounter;
    let discardCol;
    let discardRow;
    let actualArea;
    let areaCounter = 0;
    let newMatrix;
    
    for (let mRowPrincipal = 0; mRowPrincipal < matrix.length; mRowPrincipal++) {
        for (let mColPrincipal = 0; mColPrincipal < matrix[0].length; mColPrincipal++) {
            //Comprobar que no sea cero, si lo es, siguiente número
            if (matrix[mRowPrincipal][mColPrincipal] === 0) {
                break;
            }
            actualArea = 0;
            colCounter = 1; //cuenta las columnas, 1 porque se incluye a sí mismo
            rowCounter = 1; //cuenta las filas, 1 porque se incluye a sí mismo
            discardCol = false;
            discardRow = false;

            //Comprobar la fila en orden para ver cuántos 1 seguidos hay
            for (let mRow = mRowPrincipal + 1; mRow < matrix.length; mRow++) {
                //Si es 0, descartamos contar más filas
                if (matrix[mRow][mColPrincipal] === 0) {
                    break;
                }

                //Si es 1, suma una fila
                rowCounter++;
            }
            
            //Comprobar la columna en orden para ver cuántos 1 seguidos hay
            for (let mCol = mColPrincipal + 1; mCol < matrix[0].length; mcol++) {
                //Si es 0, descartamos contar más columnas
                if (matrix[mRowPrincipal][mCol] === 0) {
                    break;
                }

                //Si es 1, suma una columna
                colCounter++;
            }

            actualArea = rowCounter * colCounter; //Calculamos la máxima área posible para el cuadrado
            
            //Si el cuadrado es 1*1, no hace más cálculos y le asigna el resultado si es el mayor posible
            if (actualArea === 1) {
                if (actualArea > areaCounter) {
                    areaCounter = actualArea;
                    break;
                }
            }

            //Hace una matriz pequeña con el número actual
            

        }
    }

    return areaCounter;
}

module.exports = largestRectangleInGrid;

const matrix = [
    [1,0,1,1,1],
    [0,1,1,0,1],
    [0,1,1,0,1],
    [0,1,1,0,1]
];