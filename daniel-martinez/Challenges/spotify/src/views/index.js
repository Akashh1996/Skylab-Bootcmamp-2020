
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
    document.getElementById('option1').innerHTML = quiz.setQuizOption(playlistObj,indexSong);
    document.getElementById('option2').innerHTML = quiz.setQuizOption(playlistObj,quiz.randomNum(numOfSongs));
    document.getElementById('option3').innerHTML = quiz.setQuizOption(playlistObj,quiz.randomNum(numOfSongs));
    document.getElementById('option4').innerHTML = quiz.setQuizOption(playlistObj,quiz.randomNum(numOfSongs));
})()
