const list = require('../api/customApi.json');

let savedProducts = [];

class Wargear {
  static getWargear() {
    return list;
  }

  static addToCarrito(weapon) {
    let flagged = 0;
    const flag = savedProducts.map((thisProduct) => {
      if (thisProduct.name === weapon.name) {
        flagged = 1;
      }
      return flagged;
    });
    if (flag === 0) {
      savedProducts.push(weapon);
    }
    return savedProducts;
  }

  static deleteFromCarrito(weapon) {
    savedProducts = savedProducts.filter((product) => product.name !== weapon.name);
    return savedProducts;
  }
}

module.exports = Wargear;
