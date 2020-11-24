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
interface Person {
    firstname: string,
    lastname: string
}
function greeter(person: Person){
    return `Salutaciones Don ${person.firstname}, ha visto a su padre el señor ${person.lastname}`
}

const user = {firstname:'Narco', lastname: 'Trafficante'};

document.getElementById('root').textContent = (greeter(user));