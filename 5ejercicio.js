const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");
    let cantidadEstudiantes = prompt("Ingresar la cantidad de estudiantes a registrar: ");
    console.log("Cantidad de estudiantes a registrar: " + cantidadEstudiantes);

    let estudiantes = [];
    for (let i= 0; i<cantidadEstudiantes; i++){
        //usuario ingresa nombre y edad
        let nombreEstudiante = prompt("Ingrese el nombre del estudiante " + i + ": ");
        let edad = prompt("Ingrese la edad de " + nombreEstudiante + ": ");

        //objeto
        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad
        }
        estudiantes.push(estudiante);
    }
    return estudiantes;
}
const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados: ");
    for (let i=0; i<estudiantes.length; i++) {
        let estudianteActual = estudiantes[i];
        console.log("Nombre: " + estudianteActual.nombre + ", Edad: " + estudianteActual.edad);
    }
}
//llamando a la función
let estudiantesRegistrados = registrarEstudiantes(); //defino variable para llamar a la función ya que en la función utilicé return
mostrarListaEstudiantes(estudiantesRegistrados); //para llamar esta función le mando el listado de estudiantes almacenada en la variable