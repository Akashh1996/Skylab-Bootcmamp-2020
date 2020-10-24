const playButton = document.getElementsByClassName('play-button')[0];
const singerContainer = document.getElementsByClassName('singer')[0];
const songButton = document.getElementsByClassName('song-option');
const timer = document.getElementsByClassName('timer')[0];
const questionContainer = document.getElementsByClassName('question-container')[0];
const songOptions = document.getElementsByClassName('song-options')[0];
let counter;

const playSpotrivia = () => {
    playButton.style.visibility = 'hidden';
    timer.style.visibility = 'visible';
    questionContainer.style.visibility = 'visible';
    songOptions.style.visibility = 'visible';
    const store = new Store();
    const accessToken = 'BQDRHprooW_N9PPHzjuYhGbZ4j9Lqw6MiL-ZzxQmy_HCw1-WwV7w4tlULj0gL5MJf4fdB7IkztFQm5Fhc16ThEXlv_RBwVh8gsHBNacE6qRmlwUfN2dmzCTV96jkpwXwH1vGA-FFspBdXLrwWQNXwQ_mI3QgSL2VIHH-cVd7fDW1PcWO4qmomfmWHYDJNrBtSNDkomlR';
    let rightAnswer;
    let numberOfWrongAnswers = 0;
    let numberOfRightAnswers = 0;
    let countDownInterval;
    let arrOfQuestionSingers = [];

    const rounds = async () => {
        for (let i = 0; i < songButton.length; i++) {
            songButton[i].style.backgroundColor = 'white';
            songButton[i].style.color = 'black';
        }

        timer.innerHTML = 15;

        const arrOfRandomIDNums = [];
        let randomNumForSingerID;

        do {
            randomNumForSingerID = Math.floor(Math.random() * 10);
            if (arrOfRandomIDNums.includes(randomNumForSingerID)) {
                continue;
            } else {
                if(!arrOfRandomIDNums.length) {
                    await store.loadSingerFromAPI(accessToken, store.getSingerID(randomNumForSingerID))
                }
                arrOfRandomIDNums.push(randomNumForSingerID)
                await store.loadSingerTracksFromAPI(accessToken, store.getSingerID(randomNumForSingerID))
            }
        } while (arrOfRandomIDNums.length < 4)

        const singer = store.getSinger();

        if (arrOfQuestionSingers.includes(singer.name)) {
            if (arrOfQuestionSingers.length < 10) {
                rounds();
            }
        } else {
            arrOfQuestionSingers.push(singer.name);
            singerContainer.innerHTML = `<img class="singer-photo" src="${singer.images[2].url}" alt="Singer photo"></img>`;
            singerContainer.innerHTML += `<span class="singer-name">${singer.name}</span>`;
    
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
                        store.resetSingersTracks();
                        if (arrOfQuestionSingers.length < 10) {
                            rounds();
                        }
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
                    store.resetSingersTracks();
                    if (arrOfQuestionSingers.length < 10) {
                        rounds();
                    }
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
            console.log(numberOfWrongAnswers, numberOfRightAnswers)
        }
    }
    rounds();
}

playButton.addEventListener('click', playSpotrivia);