// use of this keyword ......

let students = {
    name : "Viakash",
    age : 20,
    math:90,
    eng:90,
    phy:90,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}
students.getAvg();

// another use  => when used outside of the object then it acts as 
//                 window object...
function getAvg(){
    console.log(this);
}
getAvg();
//-----------------------------------------------------------------//
// # Try and Catch in js ....

try{
    console.log(a);
}catch{
    console.log("Vriable not decleared!");
}

try{
    console.log(b);
}catch(err){
    console.log(err);
}
//---------------------------------------------------------------------//

// Arrow functions in js ...
const sum =(a,b)=> {
    console.log(a+b);
}
sum(2,43);

const evenOdd =(a)=>{
    if (a%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
evenOdd(223);

// arrow function with implicit return;

const mul = (a,b)=>(a*b);
console.log(mul(3,4));  

// setTimeout  function ...................................

console.log("hi there!");

setTimeout(()=> {
    console.log("how are you");
},2000);

setTimeout(()=> {
    console.log("hey!");
},4000);

setTimeout(()=> {
    console.log("i'm fine & u ?");
},6000);


// setInterval function.............,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

id = setInterval(()=>{
    console.log("Vikash");
},2000);

// to stop this , store it into a variable "id" and print the id 
console.log(id);
// then to stop the call  write clearInterval() and pass the id as argument 
clearInterval(1)


// use of this keyword with arrow functions ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

const student = {
    name: "Vikash",
    marks: 67,
    prop: this , // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks :()=>{
        console.log(this); // parent scope = global scope , for this arrow func same happening
                            // this returns window object where marks is not defined so output 
                            // is undefined ..
        return this.marks;
    }
}
console.log(student.getName());
console.log(student.getMarks());

// practice ques .........................................................

// write an arrow funtion that returns the square of a number n
const sq = (n) => {
    let square = n**2;
    console.log(square);
}
sq(4);

// write a functions that prints the "hello world" 5 times at interval of 2 sec each

let id = setInterval(()=>{
    console.log("Hello world");
},2000);

setTimeout(()=>{
    clearInterval(id)
},10000);
