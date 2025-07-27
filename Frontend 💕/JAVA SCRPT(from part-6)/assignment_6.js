// Qs1. Write a JavaScript function that returns array elements larger 
//      than a given number.

arr = [2, 3, 5, 6, 78, 87, 45, 76, 89, 34, 53, 25, 47];
num = 35;
arr1 = [];
for (j of arr) {
    if (j > num) {
        arr1.push(j);
    }
}
console.log(arr1);


// Qs2. Write a JavaScript function to extract unique characters from a string.
//      Example: str = "abcdabcdefgggh"
//      Answer: "abcdefgh"

let str = "abcdabcdefgggh";
let result = "";
for (let char of str) {
    if (!(result.includes(char))) {
        result += char;
    }
}
console.log(result);


// Qs3. Write a JavaScript function that accepts a list of country names as
//      input and returns the longest country name as output.
//      Example: country = ["Australia", "Germany", "UnitedStatesofAmerica"]
//      Output: "UnitedStatesofAmerica"

let countries = ["Australia", "Germany", "United States of America"];

function longestName(countries) {
    let longestIndex = 0;
    for (let i = 1; i < countries.length; i++) {
        if (countries[i].length > countries[longestIndex].length) {
            longestIndex = i;
        }
    }
    return countries[longestIndex];
}

console.log(longestName(countries));

// Qs4. Write a JavaScript function to count the 
//      number of vowels in a string argument.


str = "hehehehehahahahihihi😂";
function countVowel(str) {
    let count = 0;
    let arr = ['a', 'i', 'o', 'u', 'e'];
    for (char of str.toLowerCase()) {
        for (let i = 0; i < arr.length; i++) {
            if (char === arr[i]) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(countVowel(str));

// Qs5. Write a JavaScript function to generate a random number 
//      within a range (start, end).

function randomNum(start,end){
    let diff = end - start;
    let rand = Math.floor(Math.random()*diff+start);
    return rand;

}
console.log(randomNum(50,60));

