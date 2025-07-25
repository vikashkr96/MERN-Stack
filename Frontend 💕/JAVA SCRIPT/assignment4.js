// Qs1. Write a JavaScript program to delete all occurrences of element num in a given array.
// Example:
// If arr = [1, 2, 3, 4, 5, 6, 2, 3] and num = 2,
// Result should be: arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3] ;
let num = 2;
let new_arr =[];
for(let elements of arr){
    if(elements!=num){
        new_arr.push(elements);
    }
}
console.log(new_arr);

// Qs2. Write a JavaScript program to find the number of digits in a number.
// Example:
// If number = 287152, then count = 6

let number = 287156;
count = 0;

while(number>0){
    count++;
    number = parseInt(number/10);
}
console.log(count);



// Qs3. Write a JavaScript program to find the sum of digits in a number.
// Example:
// If number = 287152, then sum = 25

let number1 = 287152;
sum = 0;
while(number1>0){
    let carry = number1%10
    sum+=carry;
    number1 = parseInt(number1%10);
}
console.log(sum);



// Qs4. Write a JavaScript program to print the factorial of a number n.
// Note: Factorial of n is the product of all positive integers less than or equal to n.
// Example:

// 7! = 1×2×3×4×5×6×7 = 5040

// 5! = 120

// 3! = 6

// 0! = 1 (always)

let fact_num = 21;
let fact = 1;

for(let j=1; j<=fact_num ;j++){
    fact*=j;
}
console.log(fact);




// Qs5. Write a JavaScript program to find the largest number in an array containing only positive numbers.

let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let greatest = arr1[0]; // Assume first element is greatest

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > greatest) {
        greatest = arr1[i];
    }
}

console.log(`${greatest} is the greatest number in the array`);






