function challenge() {
  setTimeout(function () {
    console.log("Hello after 4 seconds");
  }, 4000);

  setTimeout(function () {
    console.log("Hello after 8 seconds");
  }, 8000);
}
//-------------------------------------------------------------------------------------------
function fn(second1, second2) {
  setTimeout(() => console.log(`Hello after ${second1} seconds`), second1 * 1000);
  setTimeout(() => console.log(`Hello after ${second2} seconds`), second2 * 1000);
}

// challenge();

// fn(2, 4);
//------------------------------------------------------------------------------------------
function challenge2(times) {
  setInterval(function () {
    for (let i = 0; i < times; i++) {
      console.log("Hello World");
    }
    console.log("-----");
  }, 1000);
  clearInterval();
  return console.log("DONE");
}

challenge2(5);
//-------------------------------------------------------------------------------------------
let count = 0;

const interval = setInterval(() => {
  console.log("Hola Mundo");
  counter += 1;
  if (counter === 5) {
    console.log("DONE");
    clearInterval(interval);
  }
}, 1000);
