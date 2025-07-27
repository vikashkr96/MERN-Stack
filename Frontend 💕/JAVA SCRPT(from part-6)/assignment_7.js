// Qs1.  Write an arrow function named arrayAverage
//        that accepts an array of numbers and returns the average of .
//        those numbers.
arr = [3, 4, 6, 5, 7, 6];
let arrayAverage = (arr) => {
    sum = 0;
    let average;
    for (elements of arr) {
        sum += elements;
    }
    average = sum / arr.length;
    console.log(average);
}
arrayAverage(arr);

//Qs2.Write an arrow function named isEven() that takes a single
//    number as argument and returns if it is even or not.

let isEven = (n) =>{
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("odd")
    }
}
isEven(414)

// Qs3. What is the output of the following code?
const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);

// Qs4. What is the output of the following code?

let length = 4;

function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);

