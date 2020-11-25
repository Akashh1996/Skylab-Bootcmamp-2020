var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hola " + person.firstname + " " + person.lastname;
}
var user = { firstname: 'Narco', lastname: 'Trafficante' };
document.getElementById('root').textContent = (greeter(user));
