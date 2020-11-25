class Student {
    
    fullname: string

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

function greeter(person: Person){
    return `hola ${person.firstname} ${person.lastname}`;
}
let user = new Student('Eric', 'Martínez');
document.getElementById('root').textContent = greeter(user);