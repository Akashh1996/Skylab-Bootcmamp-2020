function findOdd(integers) {
    var len = integers.length;
    var integers_sort = integers.slice().sort();

    var count = {};

    integers_sort.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
    });

    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            
            if (count[key] % 2 !== 0) {
                return Number(key);
            };
        };
    };
}

module.export = findOdd;