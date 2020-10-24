let artistName = document.getElementById('artist');
let artistImage = document.getElementById('artist__image');
let button1 = document.getElementById('butons_answer1');
let button2 = document.getElementById('butons_answer2');
let button3 = document.getElementById('butons_answer3');
let button4 = document.getElementById('butons_answer4');
let randomArtistsArray = [];
let randomButtons = [];

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
        var r = Math.floor(Math.random() * 4) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

function randomArtists (arr) {
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 27) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
}

const buttons = document.querySelector('.section__butons');
buttons.addEventListener('click', (event) => {
    if (event.target.className === 'butons__answer' ) {
        if (event.target.innerHTML === artistName.innerHTML) {
            console.log('correcto!')
        }
    }
});

randomArtists (randomArtistsArray);
randomFour (randomButtons);

function updateDisplay() {
    artistName.innerHTML = artistArray[randomArtistsArray[0]][0];
    artistImage.src = artistArray[randomArtistsArray[0]][2];
    
}

