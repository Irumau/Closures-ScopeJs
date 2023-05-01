function greeting (){
    const userName = 'Luis';

    return function displayUserName(){ 
        return `Hello #${userName}` // Al usar la variable userName que esta en el scope de la funcion greeting la variable userName se queda anidada por decirlo de una manera a la funcion displayUserName.
    }
}

const g = greeting();

console.log(g);
console.log(g());

