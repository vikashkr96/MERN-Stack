const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// Using .get method for different routes
app.get("/", (req,res)=>{
    res.send("You contacted home page");
});
 
app.get("/help", (req,res)=>{
    res.send("You contacted help page");
});

app.get("/pricing", (req,res)=>{
    res.send("You contacted pricing page");
});

// default for all non-existing routes

// app.get("*", (req,res)=>{
//     res.send("This Page does not exist");
// });
// app.use((req, res) => {
//     res.status(404).send("This Page does not exist");
// });


// path parameters
app.get("/:username/:id", (req,res)=>{
    let {username} = req.params;
    let {id} = req.params;
    
    res.send(`This a/c belongs to ${username} whose id is: ${id}`);
}); 


// query strings
app.get("/search", (req,res)=>{
    console.log(req.query);
    res.send("no results")
});