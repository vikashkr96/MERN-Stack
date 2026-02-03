const express = require("express");

const app = express();

let port = 3000;

app.set("view engine","ejs")
app.listen(port,()=>{
    console.log("server started running and listening on port: ",port);
});

app.get("/",(req,res)=>{
    // res.send("this is home");
    // now we render instead of res.send()
    res.render("home.ejs");
});

app.get("/:rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random() * 6)+1 ;
    res.render("rolldice.ejs" , {diceVal});
});


// writting interpolation syntax in ejs file and creating some dynamic pages for diff a/c
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["Vikash" , "ishowSpeed" , " Johny" , "Jolly" , "Hayato"]
//     let {username} = req.params;
//     res.render("insta.ejs", {username , followers});
// });

app.get("/ig/:username",(req,res)=>{
    let {username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("insta.ejs",{data: instaData[username]});
    }else{
        res.render("error.ejs");
    }
});


