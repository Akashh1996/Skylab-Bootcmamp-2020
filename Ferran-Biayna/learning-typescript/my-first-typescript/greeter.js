function greeter(person) {
    return "Hello, " + person.firstName[0] + " " + person.lastName[0] + " " + person.others[0];
}
var user = { firstName: [1], lastName: ['Biayna'], others: ['BDN', 2] };
document.getElementById('root').textContent = greeter(user);
