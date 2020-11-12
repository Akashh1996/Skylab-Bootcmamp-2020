export default function sayHi(name) {
    if(!name) {
        name = stranger;
    }   
    console.log(`*******************************`);
    console.log(`Hi ${name}! Welcome to Skylab`);
    console.log(`*******************************`);
}