const gameOfLife = require('./script')

test('if has 2 neighbours lives', () => {
    const initialStatus = [
        [0, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
    ]
    const finalStatus = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})

test('if has 3 neighbours lives', () => {
    const initialStatus = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
    ]
    const finalStatus = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})

test('Any dead cell with three live neighbours becomes a live cell', () => {
    const initialStatus = [
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
    ]
    const finalStatus = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})

test('if has 0 neighbours ', () => {
    const initialStatus = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    const finalStatus = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})

test('if it has 1 neighbour ', () => {
    const initialStatus = [
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0]
    ]
    const finalStatus = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})

test('it has more then 3 lives', () => {
    const initialStatus = [
        [1, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
    ]
    const finalStatus = [
        [1, 0, 1],
        [0, 1, 1],
        [0, 0, 0]
    ]

    expect(gameOfLife(initialStatus)).toEqual(finalStatus)
})
