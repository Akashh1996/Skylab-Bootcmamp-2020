let artistName = document.getElementById('artist');
let artistImage = document.getElementById('artist__image');
let button1 = document.getElementById('butons_answer1');
let button2 = document.getElementById('butons_answer2');
let button3 = document.getElementById('butons_answer3');
let button4 = document.getElementById('butons_answer4');
let audioBox = document.getElementById('audioBox');
let timerBox = document.getElementById('timer');
let correctBox = document.getElementById('correct-answer');
let playAgain = document.getElementById('play-again');
let wrongAnswers = ['Paranoid', 'Master of Puppets', 'Ace of Spades', 'Crazy Train', 'The Number of the Beast', 'Highway Star', 'Highway to Hell', 'Cowboys from Hell', 'Rainbow in the Dark', 'Running with the Devil', '2 Minutes to Midnight', 'Bark at the Moon', 'Roots Bloody Roots', 'Cemetery Gates', 'Fear of the Dark', 'Whiplash', 'Symphony of Destruction']
let buttonArray = [button1, button2, button3, button4];
let randomArtistsArray = [];
let randomButtons = [];
let time = 30;
let index = 0;
let score = 0;
let randomWrongArr = [];

playAgain.style.display= 'none';

(async function spoty() {
    await store.getSpotifyData();
    for (let i = 0; i < itemArray.length; i++) {
        artistArray.push([
            itemArray[i].track.artists[0].name,
            itemArray[i].track.name,
            itemArray[i].track.album.images[1].url,
            itemArray[i].track.preview_url
        ]);
    }
    updateDisplay();
})();

function randomFour (arr) {
    while(arr.length < 4){
        var r = Math.floor(Math.random() * 4);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function randomArtists (arr) {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 27);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function randomWrong (arr) {
    while(arr.length < 4){
        var r = Math.floor(Math.random() * 17);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

randomArtists (randomArtistsArray);

function updateDisplay() {
    if (index === 10) {
        timerBox.innerHTML = `Game over! score: ${score}`
        clearInterval(timer);
        playAgain.style.display = 'block'
    }
    artistName.innerHTML = artistArray[randomArtistsArray[index]][0];
    artistName.className = artistArray[randomArtistsArray[index]][1];
    artistImage.src = artistArray[randomArtistsArray[index]][2];
    audioBox.src = artistArray[randomArtistsArray[index]][3];
    randomButtons = [];
    randomWrongArr = [];
    randomFour (randomButtons);
    randomWrong (randomWrongArr);
    buttonArray[randomButtons[0]].innerHTML = artistArray[randomArtistsArray[index]][1];
    for (let i = 1; i < randomButtons.length; i++) {
        buttonArray[randomButtons[i]].innerHTML = wrongAnswers[randomWrongArr[i]];
    }
    time = 30;
}

const buttons = document.querySelector('.section__butons');
buttons.addEventListener('click', (event) => {

    if (event.target.innerHTML === artistName.className) {
        correctBox.innerHTML = 'CORRECT!'
        index ++;
        score ++;
        updateDisplay();
    } else {
        correctBox.innerHTML = `Wrong! The correct answer was ${artistName.className}`
        index ++;
        updateDisplay();
    }

});

let timer = setInterval (function () {
    time --;
    timerBox.innerHTML = `time: ${time}`;

    if (time === 0) {
        index ++;
        correctBox.innerHTML = `Wrong! The correct answer was ${artistName.className}`
        updateDisplay();
    }

}, 1000); 
