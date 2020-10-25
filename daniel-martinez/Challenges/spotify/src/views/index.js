
class Quiz {

    randomNum(numOfSongs){
        return Math.floor(Math.random()*numOfSongs);
    }

    setAlbumImage(playlistObj,index){
        let url=playlistObj.tracks.items[index]["track"]["album"]["images"][1]["url"];
        return `<img src=${url} alt="album-img" id="album-img">`;
    }

    setQuizOption(playlistObj, index){
        let songName = playlistObj.tracks.items[index]["track"]["name"];
        return `${songName}`;
    }

    createArrayOfOptions(playlistObj,indexSong, numOfSongs){
        let array = [];
        array.push(this.setQuizOption(playlistObj,indexSong));
        let random;
        while(array.length !== 4){
            random = this.randomNum(numOfSongs);
            if (random !== indexSong){
                array.push(this.setQuizOption(playlistObj,random))
            }
        }
        return array;
    }

    shuffle(array) {
        var m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
    }
      
    checkAnswer(option, correctSong){
        if (option === correctSong){
            //paintOthersGray();
            document.getElementById('correct-incorrect__text').innerHTML = 'Correct!';
            document.getElementById('correct-incorrect__symbol').setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Green_tick_pointed.svg/1200px-Green_tick_pointed.svg.png");
        } else {
            document.getElementById('correct-incorrect__text').innerHTML = 'Incorrect!';
            document.getElementById('correct-incorrect__symbol').setAttribute('src', "https://i.dlpng.com/static/png/6658483_preview.png");

        }
    }
}

const quiz = new Quiz;

(async () => {
    await spotifyStore.getToken();
    const playlistObj = await spotifyStore.getPlaylist(token, "0ddZALObYa8D1Zc4H1OX3U");
    let numOfSongs = playlistObj.tracks.items.length;
    let indexSong = quiz.randomNum(numOfSongs);
    let correctSong = playlistObj.tracks.items[indexSong].track.name;

    document.getElementById('playlist').innerHTML = `(Playlist name: ${playlistObj.name})`;
    document.getElementById('album-block').innerHTML = quiz.setAlbumImage(playlistObj,indexSong);

    let arrayOptions = quiz.createArrayOfOptions(playlistObj,indexSong,numOfSongs);
    arrayOptions = quiz.shuffle(arrayOptions);
    document.getElementById('option1').innerHTML = arrayOptions[0];
    let option1 = document.getElementById('option1').innerHTML;
    document.getElementById('option2').innerHTML = arrayOptions[1];
    let option2 = document.getElementById('option2').innerHTML;
    document.getElementById('option3').innerHTML = arrayOptions[2];
    let option3 = document.getElementById('option3').innerHTML;
    document.getElementById('option4').innerHTML = arrayOptions[3];
    let option4 = document.getElementById('option4').innerHTML;

    document.getElementById('option1').addEventListener("click", function(){ quiz.checkAnswer(option1, correctSong);});
    document.getElementById('option2').addEventListener("click", function(){ quiz.checkAnswer(option2, correctSong);});
    document.getElementById('option3').addEventListener("click", function(){ quiz.checkAnswer(option3, correctSong);});
    document.getElementById('option4').addEventListener("click", function(){ quiz.checkAnswer(option4, correctSong);});
})()