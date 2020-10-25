const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const startGame_btn = info_box.querySelector(".buttons .start_game");
const quiz_box = document.querySelector(".quiz_box");
const singerImage = document.querySelector(".singerImage");
const singerName = document.querySelector(".singerName");
const songOptions = document.getElementsByClassName('song-options')[0];
const songButton = document.getElementsByClassName('song-option');
const timer = document.querySelector(".timer_sec");
const time_line = document.querySelector(".header .time_line");
const questionContainer = document.querySelector(".quiz_box");

const rightAndWrongAnswers = document.getElementsByClassName('right-and-wrong-answers__wrapper')[0];
const rightAnswersCounter = document.getElementsByClassName('num-of-right-answers')[0];
const wrongAnswersCounter = document.getElementsByClassName('num-of-wrong-answers')[0];

let counter;
let numberOfRightAnswers = 0;
let numberOfWrongAnswers = 0;
let arrOfQuestionSingers = [];
let countDownInterval;
let rightAnswer;

// Show instructions button from main-page
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    document.getElementById('main-page').style.visibility = "hidden";
}

// Return main-page button from info-box
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    document.getElementById('main-page').style.visibility = "visible";
}

// Start Game button from info-box
startGame_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box

    Trivialify();
}

function Trivialify () {

    const rounds = async () => {
        debugger;
        const arrOfRandomIDNums = [];
        let randomNumForSingerID;

        do {
            randomNumForSingerID = Math.floor(Math.random() * 10);
            if (arrOfRandomIDNums.includes(randomNumForSingerID)) {
                continue;
            } else {
                if(!arrOfRandomIDNums.length) {
                    await store.loadSingerFromAPI(token, store.getSingerID(randomNumForSingerID));
                }
                arrOfRandomIDNums.push(randomNumForSingerID);
                await store.loadSingerTracksFromAPI(token, store.getSingerID(randomNumForSingerID));
            }
        } while (arrOfRandomIDNums.length < 4)

        const singer = store.getSinger();

        const setSongButtonsToOriginalState = () => {
            for (let i = 0; i < songButton.length; i++) {
                songButton[i].style.backgroundColor = 'white';
                songButton[i].style.color = 'black';
            }
        }

        const callingRoundsOrEnding = () => {
            store.resetSingersTracks();
            if (arrOfQuestionSingers.length < 10) {
                rounds();
            } else {
                console.log(arrOfQuestionSingers.length);
                playButton.style.visibility = 'visible';
                playButton.style.top = '70%';
                // songOptions.style.visibility = 'hidden';
                timer.style.visibility = 'hidden';
                questionContainer.style.visibility = 'hidden';
                rightAnswersCounter.innerHTML = numberOfRightAnswers;
                wrongAnswersCounter.innerHTML = numberOfWrongAnswers;
                rightAndWrongAnswers.style.visibility = 'visible';
                arrOfQuestionSingers = [];
                numberOfRightAnswers = 0;
                numberOfWrongAnswers = 0;
                setSongButtonsToOriginalState();
            }
        }

        if (arrOfQuestionSingers.includes(singer.name)) {
            callingRoundsOrEnding();
        } else {
            arrOfQuestionSingers.push(singer.name);
            singerImage.innerHTML = `<img class="singer-photo" src="${singer.images[2].url}" alt="Singer photo"></img>`;
            singerName.innerHTML = `<span class="singer-name">${singer.name}</span>`;

            timer.innerHTML = 15;

            setSongButtonsToOriginalState();

            let singerTracks = store.getSingersTracks();
            let songName;
            let randomNumForSingerTrack;
            let randomSingerNum;
            const arrOfRandomSingerNums = [];
            let randomButtonNumber;
            const arrOfRandomButtonNumber = [];

            do {
                randomNumForSingerTrack = Math.floor(Math.random() * 10);
                const randomButtonNumber_Generator = () => {
                    randomButtonNumber = Math.floor(Math.random() * 4);
                    if (arrOfRandomButtonNumber.includes(randomButtonNumber)) {
                        randomButtonNumber_Generator();
                    } else {
                        randomSingerNum = Math.floor(Math.random() * 4);
                        if (arrOfRandomSingerNums.includes(randomSingerNum)) {
                            randomButtonNumber_Generator();
                        } else {
                            songName = singerTracks[randomSingerNum].tracks[randomNumForSingerTrack].name;
                            if(songName.includes('(')) {
                                songName = songName.slice(0, songName.indexOf('(') - 1)
                            }
                            if (!randomSingerNum) {
                                rightAnswer = songName;
                            }
                            songButton[randomButtonNumber].innerHTML = songName;
                            arrOfRandomButtonNumber.push(randomButtonNumber);
                            arrOfRandomSingerNums.push(randomSingerNum);
                        }
                    }
                }
                randomButtonNumber_Generator();
            } while (arrOfRandomButtonNumber.length < 4)

            countDownInterval = setInterval(() => {
                if (!+timer.innerHTML) {
                    setTimeout(() => {
                        callingRoundsOrEnding();
                    }, 1500)
                    clearInterval(countDownInterval)
                } else {
                    timer.innerHTML = +timer.innerHTML - 1;
                    if(!+timer.innerHTML) {
                        for (let i = 0; i < songButton.length; i++) {
                            if (songButton[i].innerHTML === rightAnswer) {
                                songButton[i].style.backgroundColor = 'rgb(47, 213, 102)';
                            } else {
                                songButton[i].style.backgroundColor = 'red';
                            }
                            songButton[i].style.color = 'white';
                        }
                        numberOfWrongAnswers += 1
                    }
                }
            }, 1000)

            function rightOrWrongAnswer() {
                clearInterval(countDownInterval);

                setTimeout(() => {
                    callingRoundsOrEnding();
                }, 1500)

                for (let i = 0; i < songButton.length; i++) {
                    if (songButton[i].innerHTML === rightAnswer) {
                        songButton[i].style.backgroundColor = 'rgb(47, 213, 102)';
                        songButton[i].style.color = 'white';
                    } 
                }

                if (this.innerHTML !== rightAnswer) {
                    this.style.backgroundColor = 'red';
                    this.style.color = 'white';
                    numberOfWrongAnswers += 1;
                } else {
                    numberOfRightAnswers += 1;
                }
            }

            if(!counter){
                for (let i = 0; i < songButton.length; i++) {
                    songButton[i].addEventListener('click', rightOrWrongAnswer)
                }
                counter = 1;
            }
        }
    }
    rounds();
}










function showResult(rights){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (rights > 3){ // if user scored more than 3
        let scoreTag = `<span>Enhorabuena!, has acertado ${rights} preguntas de 10</span>`;
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(rights > 1){ // if user scored more than 1
        let scoreTag = `<span>No está mal, has acertado ${rights} preguntas de 10</span>`;
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = `<span>Lo siento, ${rights} de 10, ¿volvemos a jugar?</span>`;
        scoreText.innerHTML = scoreTag;
    }
}