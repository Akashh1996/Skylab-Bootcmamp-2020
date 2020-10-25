

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






