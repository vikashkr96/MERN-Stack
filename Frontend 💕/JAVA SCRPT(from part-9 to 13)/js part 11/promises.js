// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if (internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }


// saveToDb(
//     "MY self Mr. Spider Man",
//     ()=>{
//     console.log("Saved to database");
//     saveToDb(
//         "hello world", 
//         ()=>{
//         console.log("Success 2");
//         saveToDb(
//             "vikash", 
//             ()=>{
//             console.log("success 3");
//         }, ()=>{
//             console.log("failure 3");
//         })
//     })
// }, ()=> {
//     console.log("Not saved");

// })
//  doing  with promises =>>> #### syntax 

function saveToDb(data){
    return new Promise((resolve, reject) => {
       let internetSpeed = Math.floor(Math.random() * 10) + 1;
       if (internetSpeed > 6 ){
        return resolve("Success: data was saved");
       } else{
        return reject("failure: data was't saved!");
       }
    })
} 

// by using then() and catch() mathods =>>>> ## efficient and good practice , undrestandable 

// saveToDb("Apna College")
// .then(()=>{
//     console.log("data 1  saved");
//     return saveToDb("hello world");
// })
// .then(()=>{
//     console.log("data 2  saved");
//     return saveToDb("vikashhhh");
// })
// .then(()=>{
//     console.log("data 3  saved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

// we can also print actual result or error by passing it into then or catch mrthods ...........
saveToDb("Apna College")
.then((result)=>{
    console.log("data 1  saved");
    console.log(result);
    return saveToDb("hello world");
})
.then((result)=>{
    console.log("data 2  saved");
    console.log(result);
    return saveToDb("vikashhhh");
})
.then((result)=>{
    console.log("data 3  saved");
    console.log(result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log(error);
});

