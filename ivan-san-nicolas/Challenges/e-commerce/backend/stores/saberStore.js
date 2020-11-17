let sabers = require('../api/sabers.json');

class Sabers {
    static getSabers() {
        return sabers;
    }

    static getSaberByName(saberName) {
        return sabers.find((saber) => saber["product-name"] === saberName);
    }
}

module.exports = Sabers;