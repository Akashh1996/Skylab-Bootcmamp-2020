const gameOfLife = arr => {
    const gridCopy = arr.map(el => el.slice());
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const aliveOrDead = []
            const aliveCellsAround = () => {
                if (j) {
                    if (arr[i][j - 1]) {
                        aliveOrDead.push('alive')
                    }
                }
                if (i) {
                    if (j) {
                        if (arr[i - 1][j - 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                    if (arr[i - 1][j]) {
                        aliveOrDead.push('alive')
                    }
                    if (j !== arr[i].length - 1) {
                        if (arr[i - 1][j + 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                }
                if (j !== arr[i].length - 1) {
                    if (arr[i][j + 1]) {
                        aliveOrDead.push('alive')
                    }
                }
                if (i !== arr.length - 1) {
                    if (j !== arr[i].length - 1) {
                        if (arr[i + 1][j + 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                    if (arr[i + 1][j]) {
                        aliveOrDead.push('alive')
                    }
                    if (j) {
                        if (arr[i + 1][j - 1]) {
                            aliveOrDead.push('alive')
                        }
                    }
                }
            }
            if(arr[i][j]) {
                aliveCellsAround()
                if (aliveOrDead.length === 2 || aliveOrDead.length === 3) {
                    gridCopy[i][j] = 1;
                } else {
                    gridCopy[i][j] = 0;
                }
            } else {
                aliveCellsAround()
                if (aliveOrDead.length === 3) {
                    gridCopy[i][j] = 1;
                } else {
                    gridCopy[i][j] = 0;
                }
            }
        }
    }
    return gridCopy;
}

module.exports = gameOfLife;