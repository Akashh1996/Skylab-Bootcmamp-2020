class Student {
    public fullname: string;

    constructor(public firstname: string, public lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${firstname} ${lastname}`
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return `Hola ${person.firstname} ${person.lastname}`;
}

const user = new Student('Narco', 'Trafficante');

document.getElementById('root').textContent = greeter(user);