const gridState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


function createTable() {
    const table = document.createElement('div')
    table.className = 'table'

    for (let i = 0; i < gridState.length; i++) {
        const row = gridState[i]

        const tableRow = document.createElement('div')
        tableRow.className = 'table__row'

        for (let j = 0; j < row.length; j++) {
            const cell = row[j]
            const tableCell = document.createElement('div')
            tableCell.dataset.row = i
            tableCell.dataset.cell = j
            cell === 1 ? tableCell.className = 'table__cell gray' : tableCell.className = 'table__cell white'
            tableCell.addEventListener('click', toggleCell)
            tableRow.appendChild(tableCell)
        }
        table.appendChild(tableRow)
    }
    return table
}

function toggleCell(event) {
    const row = event.target.dataset.row
    const cell = event.target.dataset.cell

    if (gridState[row][cell] === 0) {
        gridState[row][cell] = 1
        event.target.className = 'table__cell gray'
    } else {
        gridState[row][cell] = 0
        event.target.className = 'table__cell white'
    }
}

document.getElementById('table-container').appendChild(createTable())

function gameOfLife(cell) {

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

gameOfLife(gridState)



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