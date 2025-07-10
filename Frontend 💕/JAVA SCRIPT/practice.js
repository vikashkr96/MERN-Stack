// ques 1.  A good String is a string starts with letter 'a' and length > 3 . 
//          write a program in js to find if a string is good or not  

let str = "apple";
if ((str[0] === "a") && (str.length > 3)){
    console.log("It's a good string");

}
else {
    console.log("It's not a good string");
}


// ques 2. predict the output of the following code !!

let num = 12;
if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("Safe");
}else{
    console.log("unsafe");
}
// output =>  safe 