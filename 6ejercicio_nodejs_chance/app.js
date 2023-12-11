//importando librería
const Chance = require('chance');

const chance = new Chance();

//generar datos aleatorios utilizando Chance
const randomName= chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

//imprime los datos almacenados en consola
console.log('Nombre aleatorio:', randomName);
console.log('Edad aleatoria:', randomAge);
console.log('Email aleatorio:', randomEmail);