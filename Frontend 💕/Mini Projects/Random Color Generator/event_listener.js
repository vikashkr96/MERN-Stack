btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let RandomColor = GetRandomColor();
    h3.innerText = RandomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = RandomColor;

    console.log("Color Updated");
});

function GetRandomColor(){
    let R = Math.floor(Math.random()*255);
    let G = Math.floor(Math.random()*255);
    let B = Math.floor(Math.random()*255);

    let color = `rgb(${R} , ${G} , ${B})`;
    return color;
}


