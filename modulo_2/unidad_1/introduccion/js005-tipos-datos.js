let mensaje = 'Hola, cómo estas?; ' //string
let edad = 10; // number
let activo = true; // Boolean
let vacio = null; //null
let x; //indefinido

console.log("Mensaje", mensaje, "tipo de variable; ", typeof mensaje);
console.log("edad", edad, "tipo de variable; ", typeof edad);
console.log("activo", activo, "tipo de variable; ", typeof activo);
console.log("vacio", vacio, "tipo de variable; ", typeof vacio);

const persona = {
    nombre: "Alejandro",
    apellido: "Córdova"
}
console.log("Apellido: ", persona.apellido, "tipo de variable: ", typeof persona);
persona.apellido = "Andrade";
console.log("Apellido: ", persona.apellido, "tipo de variable: ", typeof persona)

const frutas = ["peras", "manzanas", "piñas", "naranja"];
console.log("Frutas: ", frutas, "tipo de variable: ", typeof frutas);

const hoy = new Date();
console.log("fecha actual: ", hoy, "tipo de variable: ", typeof hoy);
console.log("Expresiones regulares");
const regex = /[a-z]+/;
console.log(regex.test("000"));

console.log("Conversiones");
a = "10";
b = 5;
multiplicacion = a * b;
console.log("a", a, "tipo de variable: ", typeof a);
console.log("b", b, "tipo de variable: ", typeof b);
console.log("Resultado de la multiplicacion: ", multiplicacion); 