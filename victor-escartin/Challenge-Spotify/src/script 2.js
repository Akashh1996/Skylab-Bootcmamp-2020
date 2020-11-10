//DOM Elements
const mainPage_box = document.querySelector("#main-page");
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
const result_btn = document.querySelector(".result_btn");
const result_box = document.querySelector(".result_box");

//Scope Elements
let counter;
let numberOfRightAnswers = 0;
let numberOfWrongAnswers = 0;
let arrOfQuestionSingers = [];
let countDownInterval;
let rightAnswer;

// Show info box
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
    document.getElementById('main-page').style.visibility = "hidden";
}

// Return to main page
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    document.getElementById('main-page').style.visibility = "visible";
}

// Show quiz box
startGame_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box

    Trivialify();
}

// Start Game
function Trivialify () {
    const rounds = async () => {
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
                songButton[i].style.backgroundColor = ' #007bff';
                songButton[i].style.color = '#fff';
            }
        }

        const callingRoundsOrEnding = () => {
            store.resetSingersTracks();
            if (arrOfQuestionSingers.length < 10) {
                rounds();
            } else {
                console.log(`Respuestas: ${arrOfQuestionSingers.length}`);
                console.log(`Aciertos: ${numberOfRightAnswers}`);
                console.log(`Fallos: ${numberOfWrongAnswers}`);
                result_btn.classList.add("show");
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

// Show Results Box
function showResult(){
    mainPage_box.style.visibility = 'hidden';
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score_text");

    if (numberOfRightAnswers > 3){
        let scoreTag = `<span>Enhorabuena!, has acertado ${numberOfRightAnswers} preguntas de 10</span>`;
        scoreText.innerHTML = scoreTag;
    }
    else if(numberOfRightAnswers > 1){
        let scoreTag = `<span>No está mal, has acertado ${numberOfRightAnswers} preguntas de 10</span>`;
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = `<span>Lo siento, ${numberOfRightAnswers} de 10, ¿volvemos a jugar?</span>`;
        scoreText.innerHTML = scoreTag;
    }
}