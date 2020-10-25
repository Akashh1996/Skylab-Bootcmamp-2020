
function createRandomPlayListArray(playListArray) {
    let playlistArrayRandom = playListArray[Math.floor(Math.random() * playListArray.length)]
    return playlistArrayRandom

}

function createRandomSongsArray(songsArray) {
    let randomSongs = []
    for (let i = 0; i < 3; i++) {
        let songsArrayRandom = songsArray[Math.floor(Math.random() * songsArray.length)]
        randomSongs.push(songsArrayRandom)
    }
    return randomSongs
}