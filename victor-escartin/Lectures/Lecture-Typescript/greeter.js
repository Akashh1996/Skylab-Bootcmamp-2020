var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
var user = new Student("Tony", "Stark");
document.getElementById('root').textContent = greeter(user);
