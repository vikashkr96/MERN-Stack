function hello(){
    for(let i = 0 ; i<10 ; i++){
        console.log("Hello")
    }
}


function printName(){
    for(let i = 0 ; i<10 ; i++){
        console.log("Vikash Sir ")
    }
}


hello();
printName();


function rollDice(){
    console.log(Math.floor(Math.random()*6)+1);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

// arguments and parameters......
function inFo(person , age){
    console.log(`${person}'s age is ${age}`);
}
inFo("Vikash Sir" , 20);

function table(n){
    for(let i = n ; i<=10*n ; i+=n){
        console.log(i);
    }
        
}

table(59);

// return keyword......
function sum(a,b,c){
    return a+b+c;
}
let s = sum(sum(70,56,64),200,sum(34,56,76));
console.log(`sum is ${s}`);
 
//no.(s) from 1 to n
function summ(n){
    let sum = 0;
    for(let i=1; i<=n ; i++){
        sum+=i;
    }
    return `Sum of no.(s) from 1 to ${n} is : ${sum} 😂`;
}

let ss = summ(5);
console.log(ss); 

// function that concatinates all strings in an array ....
let arr = ["Hey " , "Hello " ,"Bye " , "See You !"];
function concat(arr){
    let result="";
    for(let i = 0 ; i<arr.length ; i++){
        result = result+arr[i];
    }
    return result;
}
console.log(concat(arr));

