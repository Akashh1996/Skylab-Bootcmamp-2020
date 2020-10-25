const questions = [
  {
  numb: 1,
  image: playListData.tracks.items[1].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[1].track.name,
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  image: playListData.tracks.items[2].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[2].track.name,
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
  {
  numb: 3,
  image: playListData.tracks.items[3].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[3].track.name,
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
  {
  numb: 4,
  image: playListData.tracks.items[4].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[4].track.name,
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
  {
  numb: 5,
  image: playListData.tracks.items[5].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[5].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
  {
  numb: 6,
  image: playListData.tracks.items[6].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[6].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
  {
  numb: 7,
  image: playListData.tracks.items[7].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[7].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
  {
  numb: 8,
  image: playListData.tracks.items[8].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[8].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
  {
  numb: 9,
  image: playListData.tracks.items[9].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[9].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
},
  {
  numb: 10,
  image: playListData.tracks.items[10].track.album.images[0].url,
  question: "Qué canción pertenece a este artista?",
  answer: playListData.tracks.items[10].track.name,
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
}
];

//Select random Tracks
function randomTracks(){
  const n = 50;
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
      arr[i] = i + 1;
  }

  arr.sort(() => Math.random() > 0.5 ? 1 : -1);

  const loteria = arr.slice(0, 10);

  return loteria
}

let index= randomTracks();



module.exports=questions;



// creating an array and passing the number, questions, options, and answers
