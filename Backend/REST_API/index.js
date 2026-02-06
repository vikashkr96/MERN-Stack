const express = require("express");
const app = express();
let port = 3000;
const path = require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));


// to parse it for express...
app.use(express.urlencoded({extended:true}));

// requiring path and adjusting our views and public folders for being runnable from any parent dir
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id:uuidv4(),
        username: "apnacollege",
        content: "i love coding! "
    },
    {
        id:uuidv4(),
        username: "vikashkumar",
        content: "world is so cruel "
    },
    {
        id:uuidv4(),
        username: "dogluucat",
        content: "meheeheehee"
    }

];

app.listen(port, ()=>{
    console.log(`Server started running at : ${port}`);
});

app.get("/posts", (req,res)=>{
    res.render("index.ejs" , {posts});
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});

app.post("/posts" , (req,res)=>{
    let {username , content} = req.body;
    posts.push({id:uuidv4(),username,content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs" , {post});
});

app.patch("/posts/:id" , (req , res) =>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

