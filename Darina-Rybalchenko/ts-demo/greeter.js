function greeter(person) {
    return "Hola " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Narco", lastname: "Trafficante" };
document.getElementById('root').textContent = greeter(user);
