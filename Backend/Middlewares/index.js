const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

let port = 3000;
app.use(cookieParser());

// our 1st middleware ....
// app.use((req,res)=>{
//     console.log("Hi I'm a Middleware !");
//     res.send("middleware finished! ");
// })


// using next 
// app.use((req,res,next)=>{
//     console.log("Hi I'm a Middleware !");
//     next();
// })


// creating a utility middleware - logger
app.use((req,res,next)=>{
    console.log(req.hostname);
    console.log(req.method);
    console.log(req.path);
    console.log(req.cookies);
    next();
})

// path specific middlewares , and if we not do so , i'll be for all paths then ....
app.use("/random" , (req, res, next)=>{
    console.log("I'm  only for random ! ");
})




app.get("/", (req, res)=>{
    res.send("Home page");
})

app.get("/random", (req, res)=>{
    res.send("Its a random page !");
})

app.listen(port, ()=>{
    console.log("server started running");
})
