var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
}());
/* interface Person {
    firstname: string;
    lastname: string;
} */
function greeter(person) {
    return "hola " + person.firstname + " " + person.lastname;
}
var user = new Student('Eric', 'Martínez');
document.getElementById('root').textContent = greeter(user);
