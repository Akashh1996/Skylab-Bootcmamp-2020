const canvas = document.querySelector('.main');
const ctx1 = canvas.getContext('2d');
let generationNumber = document.querySelector(".generationNumber")

const resolution = 30;
canvas.width = 800;
canvas.height = 800;

let generation = 0
let grid

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

function buildGrid(COLS, ROWS) {
    let myArray = []
    for (let i = 0; i < COLS; i++) {
        myArray[i] = []
        for (let j = 0; j < ROWS; j++) {
            myArray[i][j] = Math.floor(Math.random() * 2)
        }

    }
    return myArray
}

function nextGen(grid) {
    const nextGen = grid.map(arr => [...arr]);
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            let numNeighbours = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    const xCell = col + i;
                    const yCell = row + j;

                    if (xCell >= 0 && yCell >= 0 && xCell < COLS && yCell < ROWS) {
                        const currentNeighbour = grid[col + i][row + j];
                        numNeighbours += currentNeighbour;

                    }
                }
            }

            if (cell === 1 && numNeighbours < 2) {
                nextGen[col][row] = 0;
            } else if (cell === 1 && numNeighbours > 3) {
                nextGen[col][row] = 0;
            } else if (cell === 0 && numNeighbours === 3) {
                nextGen[col][row] = 1;
            }
        }
    }
    generation++
    generationNumber.innerHTML = generation
    return nextGen;
}

function render(grid) {
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            const cell = grid[col][row];
            ctx1.beginPath();
            ctx1.rect(col * resolution, row * resolution, 40, 40);
            if (cell === 1) {
                ctx1.fillStyle = "yellowgreen"
            } else {
                ctx1.fillStyle = "black"
            }
            ctx1.fill();
            ctx1.stroke()
        }
    }
}

function updateLife() {

    grid = nextGen(grid);
    render(grid);
}

let text = "録人紀液角京件罠績陸独極志。Λορεμ ιπσθμ δολορ σιτ αμετ, εξ μπλεcτιτθρ, qθι οφφενδιτ ρεπθ清使今街大報田五題属企術石高小 LOADING...。熱情当加湯身必性別住全強。✔️ 사항은 법률로 정한다. 대통령은 내란 또는 SECURITY BREACHING... 외환의 죄를 범한 경우를 제외하고는 재직중 형사상의 소추를 받지 아니한다. ENCRYPTING... 민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. =/ ta = त, Ta = ट, tha = थ, Tha = ठ, da = द, Da = ड, dha = ध, Dha = ढ, $:- na = न, Na = ण, sha = श, Sha = ष.  יד נס אף על לך זן הם. תבואת כלבבי ממעש הבן מוח כאל. וְאָכוֹל אִם גלי הכל זכה זקן כפר כִּפְנֵי מטר יָחֹגּוּ. וכל הוא חבר ירד קדח. חיי כוח במוחו וחוסר קיבלו מֶה שכיבד מפי שהם. רק זן גל הר בו...  בת הַ. לכי סלח שבע כוח אחז. פה לך מן זן עץ לא. חֲלוֹמוֹת ובהשתערות רְכוּשׁוֹ כְּחוֹטֵא וָאֲמַהֵר טַרְפָּהּ. ||||||||||||||||"
let myText = document.querySelector(".myText")
let myText2 = document.querySelector(".myText2")
let i = 0
let time = 50

function typeWriter() {
    if (i < text.length) {
        myText2.innerHTML += text.charAt(i)

        myText.innerHTML += text.charAt(i)
        i++;
        setTimeout(typeWriter, time);
    }
    if (i === text.length) {
        i = 0
        myText.innerHTML = ""
        myText2.innerHTML = ""

    }

}
typeWriter()
grid = buildGrid(COLS, ROWS);

let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let startGame
start.addEventListener("click", function () {
    document.querySelector("ul").style.display = "none"
    startGame = setInterval(updateLife, 200)

})
stop.addEventListener("click", function () {
    clearInterval(startGame)
})
document.querySelector(".new").addEventListener("click", function () {
    document.querySelector("ul").style.display = "none"

    grid = buildGrid(COLS, ROWS);
    startGame = setInterval(updateLife, 200)

})