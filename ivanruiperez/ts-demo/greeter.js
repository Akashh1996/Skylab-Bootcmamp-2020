var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "ey! " + person.firstname + " " + person.lastname;
}
var user = new Student('Narco', 'Traficante');
document.getElementById('root').textContent = greeter(user);
