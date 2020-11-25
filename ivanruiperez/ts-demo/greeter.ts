interface Person {
    firstname: string;
    lastname: string;
}

class Student {
firstname: string;
lastname: string;
fullname: string;
constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `${firstname} ${lastname}`;
} 
}

function greeter(person: Student){
    return `ey! ${person.firstname} ${person.lastname}`;
}

const user = new Student('Narco', 'Traficante');

document.getElementById('root').textContent = greeter(user);