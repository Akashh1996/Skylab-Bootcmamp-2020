function sayHi(name) {
    if(!name) {
        name = 'stranger';
    }   
    console.log(`*******************************`);
    console.log(`Hi ${name}! Welcome to Skylab`);
    console.log(`Did you know that Melendi's real name is Ramón?`);
    console.log(`Amazing...`);
    console.log(`*******************************`);
}

module.exports = sayHi;