let lis = document.querySelectorAll("li");

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation(); //  sol for event bubbling.........
        console.log("Li was clicked")
    });
}


let div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

let ul = document.querySelector("ul");

ul.addEventListener("click",function(){
    console.log("ul was clicked");
});

