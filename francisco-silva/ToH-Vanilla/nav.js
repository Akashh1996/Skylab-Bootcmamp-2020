function topTwelve(store){
    const twelvebest=store.getHeroes();
    for(i in twelvebest){
        document.getElementById(`list_top_${i}`).innerHTML=twelvebest[i].name; 
    }
}

topTwelve(store);
  
function displayHero() {
    const heroesList=store.getHeroes(); 
    for(i in heroesList) {
    let x = document.getElementById(`list_top_${i}`).textContent;
    document.getElementById("id__my__hero").innerHTML = x.toUpperCase() + " is my hero";
    }
}


