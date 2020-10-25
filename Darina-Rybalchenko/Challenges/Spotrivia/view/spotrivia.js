
function createRandomPlayListArray(playListArray) {
    let playlistArrayRandom = playListArray[Math.floor(Math.random() * playListArray.length)]
    return playlistArrayRandom

}

function createRandomSongsArray(songsArray) {
    let randomFourSongs = []
    for (let i = 0; i < 3; i++) {
        let songsArrayRandom = songsArray[Math.floor(Math.random() * songsArray.length)]
        randomFourSongs.push(songsArrayRandom)
    }
    return randomFourSongs
}