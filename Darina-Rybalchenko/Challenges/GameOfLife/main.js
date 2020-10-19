
const grid = [
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,],
    [, , , , , , , , ,]
]

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = Math.round(Math.random())
    }
}


function gameOfLife(cell) {


    let nodeCell = document.querySelectorAll('.table__cell')
    console.log(nodeCell)

    for (let line = 0; line < cell.length; line++) {
        for (let position = 0; position < cell[line].length; position++) {
            let surroundingLives = 0;
            const neighboursNeededToBeBorn = 3

            if (line > 0) {
                position > 0 ? surroundingLives += cell[line - 1][position - 1] : null
                surroundingLives += cell[line - 1][position]
                position < cell[line].length - 1 ? surroundingLives += cell[line - 1][position + 1] : null
            }

            position > 0 ? surroundingLives += cell[line][position - 1] : null
            position < cell[line].length - 1 ? surroundingLives += cell[line][position + 1] : null

            if (line < cell.length - 1) {
                position > 0 ? surroundingLives += cell[line + 1][position - 1] : null
                surroundingLives += cell[line + 1][position]
                position < cell[line].length - 1 ? surroundingLives += cell[line + 1][position + 1] : null
            }

            if (surroundingLives === neighboursNeededToBeBorn) {
                cell[line][position] = 1

            }
            if (surroundingLives === 0 || surroundingLives === 1) {
                cell[line][position] = 0
            }
            if (surroundingLives > 3) {
                cell[line][position] = 0
            }
        }
    }
    return cell

}

gameOfLife(grid)



/* const gridInitial = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
]

const gridFinal = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,],
]



*/