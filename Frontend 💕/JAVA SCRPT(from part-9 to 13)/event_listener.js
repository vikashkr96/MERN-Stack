// let btn = document.querySelector("button");

// btn.addEventListener("click" , function(){
//     this.innerText = "Clicked Sucessfully!";
//     this.style.backgroundColor = "yellow";
// });
// let hh = document.querySelector("h1");
// hh.addEventListener("click" , function(){
//     this.style.backgroundColor = "red";
//     this.innerText = "HEADING"
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(){
//     console.log("Key was pressed");
// });

// inp.addEventListener("keyup", function(){
//     console.log("Key was released");
// });

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change" , function(){
    console.log("input changed");
    console.log(`final value = ${this.value}`);
})
user.addEventListener("input" , function(){
    console.log("smallest input changed");
    console.log(`final value = ${this.value}`);
})
