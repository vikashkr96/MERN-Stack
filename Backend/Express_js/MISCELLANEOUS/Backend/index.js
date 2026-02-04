const express = require("express");
const app = express();

const port = 4000;


app.get("/register" , (req,res)=>{
    let {username, password} = req.query;
    res.send(`Standard GET response.. WELCOME ${username}`);
});


// to handle post req and getting access to the data 
app.use(express.urlencoded({extended:true}));
app.use(express.json); // to read json data

app.post("/register" , (req,res)=>{
    console.log(req.body);
    let {username, password} = req.body;
    res.send(`Standard GET response.. WELCOME ${username}`); // further we gonna use this to store our data in the database 
});

app.listen(port, ()=>{
    console.log(`Server started running at port: ${port}`);
});



