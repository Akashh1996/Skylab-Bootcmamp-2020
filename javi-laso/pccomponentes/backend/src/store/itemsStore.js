const itemsData = require('../../api/articles.json');

let nextId = Math.max(...itemsData.map((item) => item.id));

class ItemsStore {
  static getItems() {
    return itemsData;
  }

  static getItemById(itemId) {
    return itemsData.find((item) => item.id === itemId);
  }

  static getNextId() {
    return nextId;
  }

  static incrementNextId() {
    nextId += 1;
  }
}

module.exports = ItemsStore;
