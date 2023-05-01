// Re-asignación/declaración


var firstName; //Undefined;
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; //se declara y asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando y asignando
var secondName = 'Ana'; //reasignando
console.log(secondName);

// Let
//Con let no se puede redeclarar pero si reasignar.
let fruit = 'apple' //declarar y asignar
fruit = 'kiwi';//reasignar


//const 
//Const no se puede ni redeclarar ni reasignar. se debe declarar y asignar en la misma linea;

const animal = 'dog';

const vehicles = [];
vehicles.push('🚗','🚕');
console.log(vehicles);
vehicles.shift();
console.log(vehicles);
