let player = {
    points: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    usedArtists: [],
    optionsLeft: [1, 2, 3, 4],
    correctAnswer: '',
    answer: false,
    rounds: 0
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
    if (timeLeft === 10) {
        document.getElementById('timer').className = 'button warning';
    }
    if (timeLeft === 5) {
        document.getElementById('timer').className = 'button alarm';
    }
    if (timeLeft === 0) {
        return checkAnswer('wrong');
    }
}

function getRandomArtist(artists) {
    player.optionsLeft = [1, 2, 3, 4];
    const randomNumber = Math.floor(Math.random() * 120);
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
    let actualArtist = await trivialify.getArtist(randomArtistId);
    authorName.innerHTML = actualArtist.name;
    authorImage.innerHTML = `<img src="${actualArtist.images[1].url}"
    alt="album-picture" class="album-picture">`;
    return setArtistSong(randomArtistId);
}

async function setArtistSong(randomArtistId) {
    let randomOption = Math.floor(Math.random() * player.optionsLeft.length) + 1;
    player.optionsLeft.splice(randomOption - 1, 1);
    const song = document.getElementById(`option-${randomOption}`);
    const artistTrack = await trivialify.getTopTracks(randomArtistId);
    player.correctAnswer = `option-${randomOption}`;
    song.innerHTML = artistTrack.tracks[0].name;
}

async function fillOtherOptions() {

    function getWrongArtist(artists) {
        const randomNumber = Math.floor(Math.random() * 120);
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
        const song = document.getElementById(`option-${player.optionsLeft[0]}`);
        player.optionsLeft.splice(0, 1);
        const artistTrack = await trivialify.getTopTracks(randomArtistId);
        song.innerHTML = artistTrack.tracks[0].name;
    }
    for (let iteration = 0; iteration < 3; iteration++) {
        getWrongArtist(artists);
    }
}

function checkAnswer(optionId) {
    if (player.answer === false) {
        clearInterval(countdownLeft);
        player.answer = true;
        document.getElementById('next').style.display = 'flex';
        if (optionId === player.correctAnswer) {
            player.correctAnswers++;
            player.points += 10;
            document.getElementById('total-points').innerHTML = `total points: ${player.points}`;
            for (let index = 1; index < 5; index++) {
                document.getElementById(`option-${index}`).className = 'button game-body-options grey';
            }
            const actualOption = document.getElementById(optionId);
            actualOption.className = 'button game-body-options right';
        } else if (optionId === 'wrong') {
            for (let index = 1; index < 5; index++) {
                document.getElementById(`option-${index}`).className = 'button game-body-options grey';
            }
            document.getElementById(player.correctAnswer).className = 'button game-body-options right';
        } else {
            player.incorrectAnswers++;
            for (let index = 1; index < 5; index++) {
                if (`option-${index}` === player.correctAnswer) {
                    document.getElementById(`option-${index}`).className = 'button game-body-options right';
                } else document.getElementById(`option-${index}`).className = 'button game-body-options grey';
            }
            const actualOption = document.getElementById(optionId);
            actualOption.className = 'button game-body-options wrong';
        }
    }
}

function endGame() {
    let gameBody = document.getElementById('game-body');
    let gameEnd = document.getElementById('game-end');
    gameBody.style.display = 'none';
    gameEnd.style.display = 'flex';
    document.getElementById('endgame-totalpoints').innerHTML = `total points: ${player.points}`;
    document.getElementById('endgame-correct-answers').innerHTML = `correct answers: ${player.correctAnswers}`;
    document.getElementById('endgame-incorrect-answers').innerHTML = `incorrect answers: ${player.incorrectAnswers}`;

    clearInterval(countdownLeft);
}

function resetPlayer() {
    player = {
        points: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        usedArtists: [],
        optionsLeft: [1, 2, 3, 4],
        correctAnswer: '',
        answer: false,
        rounds: 0
    }
}

function playAgain() {
    resetPlayer();
    document.getElementById('timer').innerHTML = `total points: ${player.points}`;
    for (let index = 1; index < 5; index++) {
        document.getElementById(`option-${index}`).className = 'button game-body-options';
    }
    document.getElementById('game-end').style.display = 'none';
    document.getElementById('game-body').style.display = 'flex';
    nextRound();
    player.rounds--;
}

async function nextRound() {
    player.rounds++;
    if (player.rounds === 20) {
        return endGame();
    } else {
        timeLeft = 20;
        document.getElementById('timer').innerHTML = `timer: ${timeLeft}`;
        countdownLeft = null;
        countdownLeft = setInterval(countdown, 1000);
        document.getElementById('next').style.display = 'none';
        player.answer = false;
        for (let index = 1; index < 5; index++) {
            document.getElementById(`option-${index}`).className = 'button game-body-options'
        }
        setPlayerPoints(player);
        await getRandomArtist(artists);
        fillOtherOptions();
    }
}

(async () => {
    await trivialify.getToken();
    setPlayerPoints(player);
    await getRandomArtist(artists);
    fillOtherOptions();
})()
let countdownLeft = setInterval(countdown, 1000);