for (let i = 1; i <= 5; i++) {
    console.log("Iteracion: ", i)
};

for (let i = 1; i <= 10; i++) {
    let resultado = 2 * i;
    console.log("2 x " + i + " = " + resultado);
};
console.log("--------------------")
for (let i = 1; i <= 20; i++) {
    let resultado = 3 * i;
    console.log("3 x " + i + " = " + resultado);
}
console.log("----Sumar numeros decimales-----")
let suma = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("numero par " + i);
        suma += i;
    }
};
console.log("la suma es: " + suma);

let palabra = "welcome to javascript";
for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
}