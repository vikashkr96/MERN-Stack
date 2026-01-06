// async function greet(){
//     console.log("Good Morning");  // this will return a promise(ie:- fulfilled) also 
// }


async function greet(){
    throw "Some random error"
    return "hello"  // this will return a promise(ie:- failure) also

}
greet()
.then((result)=>{
    console.log("Promise was resolved");
    console.log("result was: ",result);
})
.catch((err)=>{
    console.log("Promise was resected ");
    console.log("error was: ",err);
})

