//objeto
let miAuto = {
    marca: "Toyota",
    modelo: "Yaris",
    color: "Rojo"
}
console.log(miAuto.marca);
console.log(miAuto["marca"]);

miAuto.modelo = "Lenovo";
console.log(miAuto.modelo);
miAuto["modelo"] = "Riat";
console.log(miAuto.modelo);