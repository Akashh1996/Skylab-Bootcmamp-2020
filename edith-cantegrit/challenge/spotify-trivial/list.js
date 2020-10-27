const artists = ['5me0Irg2ANcsgc93uaYrpb', '3Mcii5XWf6E0lrY3Uky4cA']

const currentTurn = 0;
const currentScore =0;
const BIGGIE_ID = '5me0Irg2ANcsgc93uaYrpb';

let artistName;
let artistImg;
let songId;
let topTrack;

/*TIMER SETUP*/

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 15;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;



function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

/* BODY */

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

function printList() {


    artistName = spotiStore.getArtistName();
    artistImg = spotiStore.getImagesArtist()[1].url;
    songId = spotiStore.getTrackIdToPlay()
    topTrack = spotiStore.getTopTrack();
    topTrack1 = spotiStore.getTopTrackRelatedOne();
    topTrack2 = spotiStore.getTopTrackRelatedTwo();
    topTrack3 = spotiStore.getTopTrackRelatedThree();


    let arr = [1, 2, 3, 4];
    let randomsNums = shuffle(arr);
    console.log(randomsNums)

    document.getElementById("turncounter").innerHTML = `
    <div class="turn-score">${currentTurn}/10</div>
    `;

    document.getElementById("score").innerHTML = `
    <div class="turn-score">${currentScore}</div>
    `;

    document.getElementById("artist-img").innerHTML = `
    <img src=${artistImg} class="rounded mx-auto d-block img-fluid ">
    `;

    document.getElementById("songBox").innerHTML = `
    <iframe src="https://open.spotify.com/embed/track/${songId}" width="246" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `;

    document.getElementById("artist-name").innerHTML = `
    <h5 class="card-title">${artistName}</h5>`;

    document.getElementById("countdown").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
    startTimer();

    let answer = document.getElementById(`button${randomsNums[0]}`);
    answer.textContent = `${topTrack}`;
    let firstGuess = document.getElementById(`button${randomsNums[1]}`)
    firstGuess.textContent = `${topTrack1}`;
    let secondGuess = document.getElementById(`button${randomsNums[2]}`)
    secondGuess.textContent = `${topTrack2}`;
    let thirdGuess = document.getElementById(`button${randomsNums[3]}`)
    thirdGuess.textContent = `${topTrack3}`;
}

spotiStore.getToken()
.then( token => spotiStore.getArtistById(token, BIGGIE_ID))
.then( token => spotiStore.getTopTracksArtist(token, BIGGIE_ID))
.then( token => spotiStore.getRelatedArtists(token, BIGGIE_ID))
.then( token => spotiStore.getTopTracksFirstRelated(token, spotiStore.getFirstRelatedArtist()))
.then( token => spotiStore.getTopTracksSecondRelated(token, spotiStore.getSecondRelatedArtist()))
.then( token => spotiStore.getTopTracksThirdRelated(token, spotiStore.getThirdRelatedArtist()))
.then( () => printList())
.catch(err => { console.log('ERROR') })