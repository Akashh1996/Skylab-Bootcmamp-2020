class Student {
    
}

interface Person{
    firstname: string;
    lastname: string;
}
function greeter(person: Person) {
    return `Hola ${person.firstname} ${person.lastname}`
}

const user = {firstname: "Narco", lastname: "Trafficante"};

document.getElementById('root').textContent = greeter(user)
