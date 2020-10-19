Object.prototype.pushFunction = function(...elements) {
    elements.forEach((element) => {
        this[this.length] = element;
        this.length++;
    })
}