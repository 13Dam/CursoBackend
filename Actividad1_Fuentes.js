let numeros = [2, 5, 7, 10];
const calcularPromedio = (numeros) => {
    let suma= 0;
    for(let i=0; i<numeros.length; i++){
        suma += numeros[i];
    }
    let promedio = suma/numeros.length;
    return promedio;
}
let resultadoPromedio = calcularPromedio(numeros);
console.log("El promedio obtenido es: " + resultadoPromedio);