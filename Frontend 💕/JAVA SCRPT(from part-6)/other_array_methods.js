// forEach used as similar for of loop for eccesing elements.............................
let arr = [1,2,3,4,5];

arr.forEach((elements)=>{
    console.log(elements);
});
// use in array of objects
let arr1 = [{
    name:"Vikash",
    marks:96
},
{
    name:"Amit",
    marks:93
},
{
    name:"Ayush",
    marks:92
}];
arr1.forEach((obj)=>{
    console.log(obj.name);
    
})

// map like arr1.map()    ...............................................................
let nums = [1,2,3,4,5,6,7,8,9,10];

let sq = nums.map(function (el){
    return el**2;
})
console.log(sq); // returns an array 
 
// filter  -- it does the same but if conditonn is true only that value is passed into result array........................
//............................................................................................

let nums1 = [1,2,3,4,5,6,7,8,9,10];

let even = nums.filter((el)=>{
    return el%2==0;  // cond. is true for 2,4,6,8,10
})
console.log(even);

// every (act as logical and ).......................................................................................

let nums2 = [1,2,3,4,5,6,7,8,9,10];

let even1 = nums2.every((el)=>{
    return el%2==0;  // cond. is true for 2,4,6,8,10
})
console.log(even1);  // output is false 

// some (act as logical or ) ...................................................................

let nums3 = [1,2,3,4,5,6,7,8,9,10];

let even2 = nums3.some((el)=>{
    return el%2==0;  // cond. is true for 2,4,6,8,10
})
console.log(even2);  // output is true


// reduce method (accumulator,element) ......................................................................

let arrr = [1,3,2,4,5];
let result = arrr.reduce((res,el) => {
    console.log(res); //1)0+1=1 2)1+2=3 3)3+3=6 and so on ....
    return res+el;
});
console.log(result);

// find max value from an array of integers..........................................

// by loops ---
let ar = [5,2,9,3,6,4,8,7,11];
max = 0;
for(let i=0; i<= ar.length; i++){
    if(max<ar[i]){
        max=ar[i];
    }
}
console.log("max value is : ",max);

// by reduce method ---
let maximum = ar.reduce((max,el) => {
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log(maximum);

// practice ques 1 : check if every elements of an array is divisible by 10 or not ...............
div = [10,20,460,6700,90,4560];

let checked = div.every((el) => {
    return el%10 == 0;
});
console.log(checked);

// practice ques 1 : check the min number of an array 

// by loops---
arrr = [2,4,5,8,1,9];
min = 0
for(let i = 0 ; i<= arrr.length; i++){
    if(min>arrr[i]){
        console.log()
    }
}

// by reduce method---

let minimum = arrr.reduce((result,el) => {
    if(result<el){
        return result;
    }else{
        return el;
    }
})
console.log(minimum);











