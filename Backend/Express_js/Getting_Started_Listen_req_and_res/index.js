const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

//  sending request initially
app.use((req,res)=>{
    console.log("request recieved !");

    // sending the response 
    // res.send(
    //     {
    //         name:"apple",
    //         color:"red",
    //         price:60,
    //         location:["Haryana","Bihar","Chennai","Kolkata"]
    //     }
    // );
    let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> </ul>";
    res.send(code);
});



