class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = `this
    `
  }
  firstname: string;
  lastname: string;
  fullname: string;
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
  return `Hola ${person.firstname} ${person.lastname}`;
}

const user = new Student('Iván', 'San');

document.getElementById('root').textContent = (greeter(user));
