
//Variables


var a; //Se declara una variable sin asignar.
var b = "b" //se declara y asignamos un valor;
b= 'bb'; //resignación.
var a = 'aa'; //Re declaración 


// Global Scope


//Estas funciones o variables que han sido declaradas fueras de un bloque de código se pueden acceder de forma global. Pasan a ser instanciadas dentro del objeto window.

var fruit = 'Apple'; //Ambito global

function bestFruit (){
    console.log(fruit);
}


function countries(){
    country = 'Colombia'; // Al no declararse con una de las palabras reservadas esta se toma como Global.
    console.log(country);
}

//Por lo tanto se imprime dos veces la palabra colombia. Solo y unicamente si se llama antes a la función countries.
countries();
console.log(country);



