let player = {
    points: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    usedArtists: [],
    usedOptions: []
}

let timeLeft = 20;

function setPlayerPoints(player) {
    const points = document.getElementById('total-points');
    points.innerHTML = `total points: ${player.points}`;
}

function countdown() {
    const timer = document.getElementById('timer');
    timer.innerHTML = `Timer: ${timeLeft}`;
    timeLeft--;
    timer.innerHTML = `Timer: ${timeLeft}`;
    //if (timeLeft === 0) alert('Timeout!!');
}

function getRandomArtist(artists) {
    player.usedOptions = [];
    const randomNumber = Math.floor(Math.random() * 101);
    if (player.usedArtists.length !== 0) {
        for (let index = 0; index < player.usedArtists.length; index++) {
            if (player.usedArtists[index] === randomNumber) {
                return getRandomArtist(artists);
            }
        }
    }
    player.usedArtists.push(randomNumber);
    const randomArtistId = artists[randomNumber];
    return setArtist(randomArtistId);
}

async function setArtist(randomArtistId) {
    const authorName = document.getElementById('game-author-name__title');
    const authorImage = document.getElementById('album-picture');
    await trivialify.getToken();
    let actualArtist = await trivialify.getArtist(randomArtistId);
    authorName.innerHTML = actualArtist.name;
    authorImage.innerHTML = `<img src="${actualArtist.images[1].url}"
    alt="album-picture" class="album-picture">`;
    return setArtistSong(randomArtistId);
}

async function setArtistSong(randomArtistId) {
    let randomOption = Math.floor(Math.random() * 4) + 1;
    player.usedOptions.push(randomOption);
    const song = document.getElementById(`option-${randomOption}`);
    await trivialify.getToken();
    const artistTrack = await trivialify.getTopTracks(randomArtistId);
    song.innerHTML = artistTrack.tracks[0].name;
}

async function fillOtherOptions() {
    debugger;

    function getWrongArtist(artists) {
        const randomNumber = Math.floor(Math.random() * 101);
        for (let index = 0; index < player.usedArtists.length; index++) {
            if (player.usedArtists[index] === randomNumber) {
                return getWrongArtist(artists);
            }
        }
        player.usedArtists.push(randomNumber);
        const randomArtistId = artists[randomNumber];
        return setWrongArtist(randomArtistId);

    }
    async function setWrongArtist(randomArtistId) {
        await trivialify.getToken();
        let actualArtist = await trivialify.getArtist(randomArtistId);
        let randomOption = getOtherOptions();
        debugger;
        const song = document.getElementById(`option-${randomOption}`);
        await trivialify.getToken();
        const artistTrack = await trivialify.getTopTracks(randomArtistId);
        song.innerHTML = artistTrack.tracks[0].name;
        debugger;
    }

    function getOtherOptions() {
        debugger;
        let randomOption = Math.floor(Math.random() * 4) + 1;
        for (let index = 0; index < player.usedOptions; index++) {
            if (player.usedOptions[index] === randomOption) {
                return getOtherOptions();
            }
        }
        debugger;
        player.usedOptions.push(randomOption);
        return randomOption;
    }
    for (let iteration = 0; iteration < 4; iteration++) {
        getWrongArtist(artists);
    }
}

function endGame() {
    let gameBody = document.getElementById('game-body');
    let gameEnd = document.getElementById('game-end');
    gameBody.style.display = 'none';
    gameEnd.style.display = 'flex';
    clearInterval(countdownLeft);
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

setPlayerPoints(player);
getRandomArtist(artists);
fillOtherOptions();
let countdownLeft = setInterval(countdown, 1000);