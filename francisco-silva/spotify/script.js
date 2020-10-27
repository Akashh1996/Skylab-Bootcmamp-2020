(async() => {
    await spotify.getToken();
    await spotify.playlist();
    // console.log(token);
    // console.log(_songs);
    let songsList = _songs.tracks.items;
    console.log(songsList)
    let imageArray = [];
    let artistsArray = [];
    for(i in songsList) {
    imageArray.push(songsList[i].track.album.images[1])
    }
    for(i in songsList) {
    artistsArray.push(songsList[i].track.artists[0].name)
    }

    function generateRandomIndex() {
        let randomIndex = Math.floor(Math.random() * artistsArray.length);
        return randomIndex;
    }

    randomIndex = generateRandomIndex();
    

    function displayRandomValues() {
        document.getElementById("artist-name").innerHTML = songsList[randomIndex].track.artists[0].name;
        document.getElementById("song-image").src = imageArray[randomIndex].url;
        document.querySelector("button").innerHTML = randomIndex;
        let audio = songsList[randomIndex].track.preview_url;
        if(audio !== null) {
            document.getElementById("audio").src = audio;
        }
    }
    displayRandomValues();


    function displayRandomAnswers() {
        let arrayAnswers =[];
        let randomAnswersIndex = Math.floor(Math.random() * artistsArray.length);
        for(let i = 0; i<3; i++) {
            randomAnswersIndex = generateRandomIndex()
            arrayAnswers.push(songsList[randomAnswersIndex].track.name)
        }
        
        arrayAnswers.push(songsList[randomIndex].track.name)

        arrayAnswers.sort(() => Math.random() - 0.5);

        for(let i=0; i<4; i++) {
            document.getElementById(`button${i + 1}`).innerHTML = arrayAnswers[i];
            document.getElementById(`button${i + 1}`).style.background = "#b3b3b3";
        }
    }
    displayRandomAnswers()



    function timer() {
        const startingMinutes = 0.3;
        var time = startingMinutes*60;
        const countdownElement = document.getElementById("countdown");

        let x = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;

            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            countdownElement.innerHTML = `${minutes}:${seconds}`
            time--;
            if(time <= -1) {
                let y = clearInterval(x);
                countdownElement.style.color = "#b91d1d";
            }
        }
    }
    timer();


    let displayGame = document.getElementById("main-wrapper");
    let displayResults = document.getElementById("final");
    function turn() {
        let points = 0;
        let contador = 0;
        let final = false;

        // for(let i=0; i<4; i++) {
        //     let buttons = document.querySelectorAll(".button")
        //     let opcions = buttons[i].innerHTML;
        //     var rightButton;
        //     var rightAnswer;
        //     if(opcions === songsList[randomIndex].track.name) {
        //         rightAnswer = songsList[randomIndex].track.name;
        //         rightButton = buttons[i];
        //     }
        // }
        // console.log(rightAnswer)
        // console.log(rightButton)
        


        document.querySelectorAll(".button").forEach((everyButton) => {
            everyButton.addEventListener("click", (event)=> {
                if(event.target.innerHTML === songsList[randomIndex].track.name && final === false) {
                    console.log("CORRECT");
                    points++;
                    event.target.style.background = "#1db954";
                    setTimeout(function(){ 
                        generateRandomIndex();
                        randomIndex = generateRandomIndex();
                        displayRandomValues();
                        displayRandomAnswers();
                    }, 1500);
                    contador++;
                } else {
                    console.log("INCORRECT");
                    event.target.style.background = "#b91d1d";
                    // rightButton.style.background = "#1db954";
                    setTimeout(function(){ 
                        generateRandomIndex();
                        randomIndex = generateRandomIndex();
                        displayRandomValues();
                        displayRandomAnswers();
                    }, 1500);
                    contador++;
                }
                if(contador === 10) {
                    setTimeout(function(){ 
                    displayGame.style.display = "none";
                    displayResults.style.display = "flex"; 
                    final = true;
                    document.getElementById("total-points").innerHTML = "Total points: " + (points*10);
                    }, 1500);
                }
            })
        })
        return;
    }
    turn()
    
    function reset() {
        let resetButton = document.getElementById("reset-button");
        
        resetButton.addEventListener("click", ()=> {
            turn();
            displayGame.style.display = "flex";
            displayResults.style.display = "none"; 
        })
        resetButton.style.background = "#1db954"
    }
    reset()

    





})();

