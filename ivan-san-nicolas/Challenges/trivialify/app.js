let player = {
    points: 0,
    correctAnswers: 0,
    incorrectAnswers: 0
}

function getRandomArtist(artists) {
    const randomNumber = Math.floor(Math.random() * 101);
    const randomArtistId = artists[randomNumber];
    return setArtist(randomArtistId);
}

getRandomArtist(artists);

async function setArtist(randomArtistId) {
    const authorName = document.getElementById('game-author-name__title');
    const authorImage = document.getElementById('album-picture');
    await trivialify.getToken();
    actualArtist = await trivialify.getArtist(randomArtistId);
    authorName.innerHTML = actualArtist.name;
    authorImage.innerHTML = `<img src="${actualArtist.images[1].url}"
    alt="album-picture" class="album-picture">`;
    return setArtistSong(randomArtistId);
}


async function setArtistSong(randomArtistId) {
    const song = document.getElementById('option-1');
    await trivialify.getToken();
    const artistTrack = await trivialify.getTopTracks(randomArtistId);
    song.innerHTML = artistTrack.tracks[0].name;
}



function endGame() {
    let gameBody = document.getElementById('game-body');
    let gameEnd = document.getElementById('game-end');
    gameBody.style.display = 'none';
    gameEnd.style.display = 'flex';
    return gameBody, gameEnd;
}

function resetPlayer(player) {
    player.points = 0;
    player.correctAnswers = 0;
    player.incorrectAnswers = 0;
}

function playAgain(player, resetPlayer) {
    resetPlayer(player);
    gameEnd.style.display = 'none';
    gameBody.style.display = 'flex';
}