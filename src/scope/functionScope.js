// Function Scope

function greeting(name){
    const userName =  name;
    console.log(userName);

    if(typeof userName === 'string'){
        console.log(`Hello ${userName}`);
    }
}


greeting(2);