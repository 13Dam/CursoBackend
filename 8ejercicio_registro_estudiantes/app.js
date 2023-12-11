//no es posbile utilizar prompt del lado del servidor como hacíamos del lado del navegador. Por eso utilizamos la librería readline-sync
const readlineSync = require('readline-sync');
const {mostrarListaEstudiantes} = require('./listaEstudiantes');

const registrarEstudiantes = () => {
    const cantidadEstudiantes = readlineSync.question("Ingrese la cantidad de estudiantes a regsitrar: ");
    console.log("La cantidad de estudiantes a registrar es: " + cantidadEstudiantes);
    const estudiantes = [];

    for (let i=0; i<cantidadEstudiantes; i++) {
        let nombre = readlineSync.question("Ingrese el nombre del estudiante " + i + ": ");
        let edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);

        const estudiante = {
            nombre,
            edad
        }
        estudiantes.push(estudiante);
    }
    mostrarListaEstudiantes(estudiantes);
};
registrarEstudiantes();