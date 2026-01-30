let a = 5;
for(let i = 0; i<=a ; i++){
    console.log("Hello",i);
}


// when run through node in terminal the output can be seen below~

// C:\Users\amitk\OneDrive\Desktop\development\Backened\Node_js>node script.js
// Hello 0
// Hello 1
// Hello 2
// Hello 3
// Hello 4
// Hello 5
// C:\Users\amitk\OneDrive\Desktop\development\Backened\Node_js>


console.log(ProcessingInstruction.argv);

const math = require("./math");
console.log(math);
console.log(math.sum(4,5));