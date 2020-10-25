const playButton = document.getElementsByClassName('play-button')[0];
const singerContainer = document.getElementsByClassName('singer')[0];
const songButton = document.getElementsByClassName('song-option');
const timer = document.getElementsByClassName('timer')[0];
const questionContainer = document.getElementsByClassName('question-container')[0];
const songOptions = document.getElementsByClassName('song-options')[0];
const rightAndWrongAnswers = document.getElementsByClassName('right-and-wrong-answers__wrapper')[0];
const rightAnswersCounter = document.getElementsByClassName('num-of-right-answers')[0];
const wrongAnswersCounter = document.getElementsByClassName('num-of-wrong-answers')[0];

let counter;
let numberOfRightAnswers = 0;
let numberOfWrongAnswers = 0;
let arrOfQuestionSingers = [];
let countDownInterval;
let rightAnswer;

const playSpotrivia = () => {
    playButton.style.visibility = 'hidden';
    rightAndWrongAnswers.style.visibility = 'hidden';
    timer.style.visibility = 'visible';
    questionContainer.style.visibility = 'visible';
    songOptions.style.visibility = 'visible';

    const store = new Store();
    const accessToken = 'BQDRHprooW_N9PPHzjuYhGbZ4j9Lqw6MiL-ZzxQmy_HCw1-WwV7w4tlULj0gL5MJf4fdB7IkztFQm5Fhc16ThEXlv_RBwVh8gsHBNacE6qRmlwUfN2dmzCTV96jkpwXwH1vGA-FFspBdXLrwWQNXwQ_mI3QgSL2VIHH-cVd7fDW1PcWO4qmomfmWHYDJNrBtSNDkomlR';

    const rounds = async () => {
        const arrOfRandomIDNums = [];
        let randomNumForSingerID;

        do {
            randomNumForSingerID = Math.floor(Math.random() * 10);
            if (arrOfRandomIDNums.includes(randomNumForSingerID)) {
                continue;
            } else {
                if(!arrOfRandomIDNums.length) {
                    await store.loadSingerFromAPI(accessToken, store.getSingerID(randomNumForSingerID));
                }
                arrOfRandomIDNums.push(randomNumForSingerID);
                await store.loadSingerTracksFromAPI(accessToken, store.getSingerID(randomNumForSingerID));
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
                songOptions.style.visibility = 'hidden';
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
            singerContainer.innerHTML = `<img class="singer-photo" src="${singer.images[2].url}" alt="Singer photo"></img>`;
            singerContainer.innerHTML += `<span class="singer-name">${singer.name}</span>`;
    
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

playButton.addEventListener('click', playSpotrivia);