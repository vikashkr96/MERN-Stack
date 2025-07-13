// Qs1.Create a number variable num with some value.Now, print “good” if the number is divisible by
// 10 and print “bad” if it is not 

// num = prompt("Enter a number: ");
// if(num % 10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// Qs2.Take the user's name & age as input using prompts.Then return back the following
// statement to the user as an alert (by substituting their name & age):name is age years old

// name = prompt("Enter your name: ");
// age = prompt("Enter your age:");
// alert(`${name} is ${age} years old`)

// Qs3.Write a switch statement to print the months in a quarter.
// Months in Quarter1:January,February,March
// Months in Quarter2:April,May,June
// Months in Quarter3:July,August,September
// Months in Quarter4:October,November,December

// quart = prompt("Enter the quarter(1-4): ")
// switch (quart){
//     case "1":
//         console.log("January,February,March");
//         break;
//     case "2":
//         console.log("April,May,June");
//         break;
//     case "3":
//         console.log("July,August,September");
//         break;
//     case "4":
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("input error!!")
        
// }

// Qs4.A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length 
// greater than 5. For a given string print if  it is golden or not .

// str = prompt("Enter a srting : ");
// if ((str[0] === 'A' || str[0] === 'a') && (str.length > 5)){
//     console.log("Its a golden string!!");
// }else{
//     console.log("Its not a golden string!!!");
// }

// Qs5.Write a program to find the largest of 3 numbers.

// a = prompt("Enter the first number : ");
// b = prompt("Enter the second number : ");
// c = prompt("Enter the third number : ");

// if (a>b && a>c){
//     console.log(`${a} is the greatest`);
// }
// if (b>a && b>c){
//     console.log(`${b} is the greatest`)
// }else{
//     console.log(`${c} is the greatest`);
// }

// Qs6 (Bonus) . Write a program to check if 2 numbers have the same last digit.
//               Eg:32 and 47852 have the same last digit i.e. 2

num1 = prompt("Enter the first number : ");
num2 = prompt("Enter the second number : ");
if (num1%10 == num2%10){
    console.log(`${num1} and ${num2} have the same last digit`);
}else{
    console.log(`${num1} and ${num2} do not have the same last digit`);
}



