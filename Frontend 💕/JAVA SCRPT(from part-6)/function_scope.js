let age = 25;  // global scope 
function aged() {
    console.log(age);  // using global scope inside the function..  allowed !
}
aged();


function calSum(a, b) {
    let sum = a + b;
}
calSum(3, 2);
console.log(sum);  // raise an error because we are accesing a function scope outside of the function(globally)

// block scope .....
{
    var a = 10;
}
console.log(a); // print because not work on var 

{
    let b = 112;
    const c = 132;
}
console.log(b); 
console.log(c);// error will be raised that "c" is not defined ...


let greet = "Hello";   // global scope => accessible anywhere 
function changeGreet(){
    let greet = "Namaste"; // function scope 
    console.log(greet);

    function innerGreet(){
        console.log(greet); // nested function => Lexical scope 
    }
    innerGreet();   //from Lexical scope 
}

console.log(greet);  // from global scope 
changeGreet();  //  from function scope 

