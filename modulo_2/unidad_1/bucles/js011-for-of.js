const alumnos = ["luis", "marcos", "maria"]
for (const alumno of alumnos) {
    console.log("hola: ", alumno)
}

const numeros = [12, 123, 23, 13, 3, 2, 12, 2]
for (const numeroStr of numeros) {
    const numero = parseInt(numeroStr, 10);
    if (numero > 10) {
        console.log("Número mayor a 10:", numero);
    }
}