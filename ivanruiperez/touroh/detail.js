class DetailComponent {
  constructor(hero) {
    this.hero = hero;
  }

  updateHtmlValue(element, property, value) {
    element[property] = value;
  }
  loadHeroes(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = type;
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.send();
  }
}

module.exports = DetailComponent;
