let para1 = document.createElement('p');
para1.innerText = "Hey I'm red ! ";
document.querySelector('body').append(para1);

para1.classList.add("red");

let heading3 = document.createElement('h3');
heading3.innerText = "Hey i'm blue h3 ! ";
document.querySelector('body').append(heading3);

heading3.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in the div";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').append(div);