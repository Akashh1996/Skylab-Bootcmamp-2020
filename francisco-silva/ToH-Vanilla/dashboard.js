const passArray = store.getTopHeroes();
function passTop(store) {
    for(i in passArray) {
        document.getElementById(`heroe_top_${i}`).innerHTML = passArray[i].name;

    }
}
passTop(store)

const topHeroes = passTop(store);

const buttonId0 = document.getElementById("heroe_top_0");
const buttonId1 = document.getElementById("heroe_top_1");
const buttonId2 = document.getElementById("heroe_top_2");
const buttonId3 = document.getElementById("heroe_top_3");

const heroName = document.getElementById("test")

buttonId0.addEventListener("click", function() {
    heroName.innerHTML = document.getElementById(`heroe_top_0`).innerText
})
buttonId1.addEventListener("click", function() {
    heroName.innerHTML = document.getElementById(`heroe_top_1`).innerText
})
buttonId2.addEventListener("click", function() {
    heroName.innerHTML = document.getElementById(`heroe_top_2`).innerText
})
buttonId3.addEventListener("click", function() {
    heroName.innerHTML = document.getElementById(`heroe_top_3`).innerText
})

// function printHeroName() {
//     for(i in passArray) {
//         let buttons = document.getElementById(`heroe_top_${i}`);
//         buttons.innerHTML = document.getElementById(`test`).innerText
//     }
// }

// printHeroName() 