let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    item = document.createElement("li");
    item.innerText = inp.value;

    dltbtn = document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText = "Delete";

    item.appendChild(dltbtn);

    ul.appendChild(item);
    inp.value = "";

});

// let dltbtns = document.querySelectorAll(".delete");
// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         let par = dltbtn.parentElement;
//         par.remove();
//     })
// }; >> this can be a problem for newly added elements though event listeners
//       so we will use event delegation and bubbling condition 
//       ie: we will use event listener on parent element of button instead of using on it 

ul.addEventListener("click",function(){
    console.log("button was clicked"); 
});  // now this will work on our newly created elements because of event bubbling




