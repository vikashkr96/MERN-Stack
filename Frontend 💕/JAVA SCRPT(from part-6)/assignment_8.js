// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [2,4,6,8,6,9,28];
let sum = 0;
let avg;
let newArr = [];
let arrow = (arr)=>{
    for(let el of arr){
        el=el**2;
        newArr.push(el);
    }
    for(let i of newArr){
        sum+=i;
    }
    avg=sum/newArr.length;
    console.log(avg);
}
arrow(arr);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let d = arr.map((el)=>{
    return el+=5;
});
console.log(d);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let arr1 = ["vikash","nasir","amit","aayush"];
let up = arr1.map((el)=>{
    el=el.toUpperCase();
    return el;
})
console.log(up);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array 
//       and a variable number of arguments. The function should return a new array with the original 
//       array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr2,...args)=>[
...arr2,
...args.map((el)=>(el*2))
];
console.log(doubleAndReturnArgs([2,3,4,5,6],4,5,6,3));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

obj1 = {
    name:"vikash",
    roll:11242641
}

obj2 = {
    name1:"nasir",
    roll1:11242601
}

const mergeObjects = (obj1 , obj2) => {
    return  {...obj1,...obj2};
}
console.log(mergeObjects(obj1,obj2));


