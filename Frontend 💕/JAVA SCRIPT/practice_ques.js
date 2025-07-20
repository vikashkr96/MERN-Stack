let months = ["january" , "july" , "march" , "august"];

// convert it to july june march august in one line 

months.splice(0,2,"july","june");
console.log(months);

// return the index of javascript when reversed

let arr = ["C","C++","HTML","javascript","python","java","c#","sql"];
console.log((arr.reverse().indexOf("javascript")));

// array references 

let arr1 = [1];
let arr2 = [1];
console.log(arr1===arr2);

// array copy (means at same reference)

cars = [1,2,3,4];
new_cars = cars;
cars.pop();
console.log(new_cars);

// nested array

num = [[1,2],[3,4],[5,6]];
console.log(num);
console.log(num[0][1]);

// practice ques 
// tic tac toe game 

let tic = [["X",null,"O"],[null,"X",null] , ["O",null,"X"]];
console.log(tic);