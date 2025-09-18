// let smallimages = document.getElementsByClassName("oldImg");
// for(let i =0; i <=smallimages.length; i++){
//     smallimages[i].src = "https://i.pinimg.com/736x/b4/93/c2/b493c21123f377dc880f63527b51bea9.jpg";
//     console.log(smallimages);
// }


// // for elements
// console.dir(document.querySelector("p"));
// // for id 
// console.dir(document.querySelector("#description"));
// // for class 
// console.dir(document.querySelector(".oldImg"));

// let para = document.querySelector('p');
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);

// access and change color of all links (only inline styling)
// let linked = document.querySelectorAll(".box a");
// for (let link of linked){
//     link.style.color = "red";
// }

// classList => css manipulation in wep pages
let heading = document.querySelector("h1");

//adding class geen into classList
heading.classList.add("green"); // heading color changes to green

//removing that color 
heading.classList.remove("green");

// again adding another 
heading.classList.add("spacing");

// to check class exist or not 
console.log(heading.classList.contains("green"));  //  false because we removed it 

console.log(heading.classList.contains("spacing")); // true 

// to switch bt add and remove 
heading.classList.toggle("green");  // it was not in the classList but not toggled into it 
console.log(heading.classList.contains("green"));   // true  


// now setting bg color of box to yellow 

let box = document.querySelector(".box");
box.classList.add("yellowBg");
console.log(box.classList.contains("yellowBg"));






