Object.prototype.fillFunction = function(value, start = 0, end = this.length) {
    const keys = Object.keys(this);

    start = start < 0 ? start + this.length : start;
    end = end < 0 ? end + this.length : end;

    for (start; start < end; start++) {
        this[keys[start]] = value;
    }
}

//El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) 
// hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.