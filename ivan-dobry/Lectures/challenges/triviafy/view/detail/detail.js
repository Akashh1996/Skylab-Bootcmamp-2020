let artistName = document.getElementById('artist');
let artistImage = document.getElementById('artist__image');
let button1 = document.getElementById('butons_answer1');
let button2 = document.getElementById('butons_answer2');
let button3 = document.getElementById('butons_answer3');
let button4 = document.getElementById('butons_answer4');
let buttonArray = [button1, button2, button3, button4]
let randomArtistsArray = [];
let randomButtons = [];
let index = 0;

(async function spoty() {
    await store.getSpotifyData();
    for (let i = 0; i < itemArray.length; i++) {
        artistArray.push([
            itemArray[i].track.artists[0].name,
            itemArray[i].track.name,
            itemArray[i].track.album.images[1].url
        ]);
    }
    console.log(artistArray);
})();

function randomFour (arr) {
    while(arr.length < 4){
        var r = Math.floor(Math.random() * 4);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function randomArtists (arr) {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 27) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}



randomArtists (randomArtistsArray);
randomFour (randomButtons);

function updateDisplay() {
    artistName.innerHTML = artistArray[randomArtistsArray[index]][0];
    artistName.className = artistArray[randomArtistsArray[index]][1];
    artistImage.src = artistArray[randomArtistsArray[index]][2];
    buttonArray[randomButtons[0]].innerHTML = artistArray[randomArtistsArray[index]][1];
    for (let i = 1; i < randomButtons.length; i++) {
        buttonArray[randomButtons[i]].innerHTML = artistArray[randomArtistsArray[i]][1];
    }
}

const buttons = document.querySelector('.section__butons');
buttons.addEventListener('click', (event) => {

    if (event.target.innerHTML === artistName.className) {
        console.log('correcto!')
        index ++;
        updateDisplay();
    }

});