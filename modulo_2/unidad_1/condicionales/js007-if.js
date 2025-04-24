console.log("------CONDICIONALES------");
console.log("if simple");
temperatura = 35;
if (temperatura > 30) {
    console.log("hace calor");
}
console.log("if else");
usuariologueado = true;
if (usuariologueado) {
    console.log("Bienvenido de nuevo");
} else {
    console.log("Porfavor, incia sesion");
}

console.log(" if else if else");
nota = 9;
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

console.log("if anidado")
edad = 10
tienelicencia = true;
if (edad >= 18) {
    if (tienelicencia) {
        console.log("Puede conducir")
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log(" Es menor de edad");
}