// default parameter 

function sum(a,b=3){
    return a+b;
}
sum(10);


// destructing ....
// to store arr Element to variables 

let arr = ["nasir","kutta","suwar"];
let [winner,runnerup,...others] = arr;
console.log(winner);
console.log(runnerup);
console.log(others);



