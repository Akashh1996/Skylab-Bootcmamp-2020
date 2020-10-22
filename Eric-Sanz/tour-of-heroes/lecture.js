    loadHeroes(url, type, callback) {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = type;

      xhr.onload = function() {
        callback(xhr.response);

      };

      xhr.send();
    }

    logData(data) {
      console.log(data);
    }

    loadHeroesWithFetch() {
      return fetch('superHeroData.json').then((response) => {
        console.log('2');
        return response.json(); 
      }).then((value) => {
        console.log('3');
        superheroes = value;
      })
    }