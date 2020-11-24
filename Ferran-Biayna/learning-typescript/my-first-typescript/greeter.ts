interface Person {
    firstName: number[];
    lastName: string[];
    others: (string | number)[];
}

function greeter(person: Person) {
    return `Hello, ${person.firstName[0]} ${person.lastName[0]} ${person.others[0]}`
}

let user = {firstName: [1], lastName: ['Biayna'], others: ['BDN', 2]}

document.getElementById('root').textContent = greeter(user);