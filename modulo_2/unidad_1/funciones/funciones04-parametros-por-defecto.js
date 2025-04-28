/**
 * Calcula el area de un triangulo dado su base y altura, por defecto 1 y 1 respectivamente
 * @param {*} width - Base
 * @param {*} height - Altura
 */
function getTriangleArea(width = 1, height = 1) {
    console.log(`El area de un triangulo de base ${width} y altura ${height} es de ${(width * height) / 2}`);
}
/**
 * Obtiene el promedio de un arreglo de numeros
 * @param {*} arrayDetail - Arreglo de numeros
 */
function getAverageFromArray(arrayDetail = []) {
    let sum = 0;
    arrayDetail.forEach(num => {
        sum += num;
    });
    console.log(`El promedio del arreglo es ${sum / (arrayDetail.length == 0 ? 1 : arrayDetail.length)}`);
}

// Ejecucion del area de un triangulo
getTriangleArea();
getTriangleArea(3, 2);

// Ejecucion del promedio de un arreglo
getAverageFromArray();
getAverageFromArray([2, 5, 8, 9]);