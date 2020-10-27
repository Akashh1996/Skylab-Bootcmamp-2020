
let cont = 0;


function randomCorrect(artistArray){
    const randomArray = artistArray;
    const randomArtist = randomArray[Math.floor(Math.random() * randomArray.length)];
    
    return randomArtist;
}

function randomWrong(artistArray, randomArtist){
    const randomArray = artistArray;
    const correctSong = randomArtist;
    const wrongSongs = [];


    for(let index = 0; wrongSongs.length < 3; index++){
        const randomSong = randomArray[Math.floor(Math.random() * randomArray.length)];
        if(randomSong != correctSong){
            wrongSongs.push(randomSong);
        }
    }

    return wrongSongs;
}

function correctSong(){
    cont = cont + 10;
    const score = document.getElementById("punctuation");
    score.innerHTML = "Punctuation: " + cont;
    
    return cont;
}

function wrongSongs(){
    cont = cont - 10;
    const score = document.getElementById("punctuation");
    score.innerHTML = "Punctuation: " + cont;
    
    return cont;
}

function startGame(){
    const reestartButton = document.getElementById("questionsTrivia");
    reestartButton.innerHTML = "";
}

function restartGame(){
    cont = 0;
    const score = document.getElementById("punctuation");
    score.innerHTML = "Punctuation: " + cont;
}

function updateAudio(element, audioSong){
    const elementAudio = element;
    const audio =  audioSong;
    elementAudio.innerHTML="";
    elementAudio.innerHTML =
        elementAudio.innerHTML + 
        `
<audio controls autoplay>
<source id="songAudio" src="${audio}">
</audio>
        `;

}
