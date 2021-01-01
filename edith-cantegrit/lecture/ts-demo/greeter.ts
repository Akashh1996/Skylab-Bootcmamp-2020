interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person) {
    return `Hola ${person}`;
}

const user = {firstname:'Narco', lastname:'Trafficante'}
document.getElementById('root').textContent = greeter(user);
