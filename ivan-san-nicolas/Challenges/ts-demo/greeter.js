var Student = (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = "this\n    ";
    }
    return Student;
}());
function greeter(person) {
    return "Hola " + person.firstname + " " + person.lastname;
}
var user = new Student('Iván', 'San');
document.getElementById('root').textContent = (greeter(user));
