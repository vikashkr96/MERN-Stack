const express = require("express");
const app = express();
// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.use(express.static("public"));
app.set("view engine","ejs");



app.get("/test", (req,res)=>{
    res.render("abc.ejs", {name:express.session.name});
});


// express session options
//  with every single request we can see aur particular session id in inspect > application > cookies 
const sessionOptions =  session({
    secret : "mysupersecretstring",
    resave:false,  // forces session to be saved back in the session store even if it was not modified during req
    saveUninitialized:true // forces a session that is uninitialised to be stored  to session store 

});


app.use(sessionOptions);  
app.use(flash());

// route for registration 
// storing info into the session
app.get("/register", (req, res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    req.flash("success", "User registerd !");
    res.redirect("/hello");
});

// accessing or using the stores session informations in multiple routes 
app.get("/hello", (req, res)=>{
    res.render("abc.ejs", {name:req.session.name , msg: req.flash("success")});
});


// route for req count 
app.get("/getcount", (req, res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`you sent the request ${req.session.count} times !`);
})



app.listen(3000,()=>{
    console.log("server is listening at 3000");
});