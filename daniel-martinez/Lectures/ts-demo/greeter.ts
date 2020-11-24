class Student {
    public firstname: string;
    public lastname: string;
    public fullname: string;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${this.firstname} ${this.lastname}`
    }

}

interface Person {
    firstname: string;
    lastname: string
}

function greeter(person: Person) {
    return `Hola ${person.firstname} ${person.lastname}`
}

const user = new Student('Daniel', 'Martínez')

document.getElementById('root').textContent = (greeter(user))