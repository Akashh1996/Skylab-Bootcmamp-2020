const x = "10";
undefined
+x
10
+!x
0
!x
false
x
"10"
+x + ''
"10"

let ticket = {id : 0 }; 
undefined
ticket === {id: 0}
false
ticket === ticket
true

function x () {};
undefined
function y () {};
undefined
Object.is(x, y);
false
Object.is(x, x);
true


let  sherlock = {
    surname: "Holmes",
address: {city: "London"}

};

let john = { 
    surname: "Watson",
    address: sherlock.address


};

john.surname = "Lenon";
john.address.city = "Malibu";

"Malibu"
/////
const sherlock = { surname: 'Holmes', age: 34};
undefined
let propertyName = prompt('que quieres saber de sherlock');
alert(sherlock[propertyName]);

sherlock['age']
//result  34
sherlock.age
//result  34

sherlock.boat = {};
{}
sherlock.boat.color = "red"
"red"
sherlock.boat;
{color: "red"}

let a = 1;
undefined
let b = 2
undefined
[a,b] = [b, a]
(2) [2, 1]
a;
2
b;
1


//intercambiar los valores de surname
let singer = {surname: 'Turner'};
let pilot = {surname: 'Kamal'};
undefined
[singer.surname, pilot.surname] = [pilot.surname, singer.surname]
(2) ["Kamal", "Turner"]
singer.surname;
"Kamal"
pilot.surname;
"Turner"

//mtabilidad
const spreadsheet = {title: "sales"};
const copy = spreadsheet;
copy.title = copy.title + '(Copy)';
console.log(spreadsheet.title);
VM2253:4 sales(Copy)


