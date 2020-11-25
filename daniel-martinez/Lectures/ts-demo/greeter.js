var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = this.firstname + " " + this.lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hola " + person.firstname + " " + person.lastname;
}
var user = new Student('Daniel', 'Martínez');
document.getElementById('root').textContent = (greeter(user));
