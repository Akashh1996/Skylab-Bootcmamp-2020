const itemsData = require('../../api/articles.json');

class ItemsStore {
  static getItems() {
    return itemsData;
  }

  static getItemById(itemId) {
    return itemsData.find((item) => item.id === itemId);
  }
}

module.exports = ItemsStore;
