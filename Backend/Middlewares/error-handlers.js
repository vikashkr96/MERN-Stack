const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
let port = 3000;
const ExpressError = require("./ExpressError");



const checkToken = (req, res, next) => {
    let { token } = req.query;

    if (token === "giveaccess") {
        next();
    }

    throw new ExpressError(401, "Access denied !");
};

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");   
})

app.get("/api", checkToken , (req, res)=>{
    res.send("data");
})


// home route
app.get("/", (req, res)=>{
    res.send("Home page");
})
app.get("/err",(req,res)=>{
    abcd = abcd;
})

// lets create a error handler middleware
app.use((err,req,res,next)=>{
    let {status= 500 , message = "Some error happened"} = err ;
    res.status(status).send(message);
})



// app.use((req,res)=>{
//     res.status(404).send("Page  not found ! ")
// })

app.listen(port, ()=>{
    console.log("server started running");
})