Object.filter = (obj, predicate) => 
                  Object.fromEntries(Object.entries(obj).filter(predicate));
// Example use:
let scores = {
    John: 2, Sarah: 3, Janet: 1
};
let filtered = Object.filter(scores, ([name, score]) => score > 1); 
let surnames = {
    John: 'Lennon', Sarah: 'Connor', Janet: 'Jackson'
};
let filtered2 = Object.filter(surnames, ([name, surnames]) => surnames.length === 6);
console.log(filtered);
console.log(filtered2);