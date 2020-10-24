
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
      
}

const quiz = new Quiz;

(async () => {
    await spotifyStore.getToken();
    const playlistObj = await spotifyStore.getPlaylist(token, "0ddZALObYa8D1Zc4H1OX3U");
    let numOfSongs = playlistObj.tracks.items.length;
    let indexSong = quiz.randomNum(numOfSongs);
    document.getElementById('playlist').innerHTML = `Playlist name: ${playlistObj.name}`;
    document.getElementById('album-block').innerHTML = quiz.setAlbumImage(playlistObj,indexSong);
    let arrayOptions = quiz.createArrayOfOptions(playlistObj,indexSong,numOfSongs);
    arrayOptions = quiz.shuffle(arrayOptions);
    document.getElementById('option1').innerHTML = arrayOptions[0];
    document.getElementById('option2').innerHTML = arrayOptions[1];
    document.getElementById('option3').innerHTML = arrayOptions[2];
    document.getElementById('option4').innerHTML = arrayOptions[3];
})()