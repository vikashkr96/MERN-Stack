// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return req.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         return fetch(url);
//     })
//     .then((res)=>{
//         console.log(res);
//         return req.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })





// using fetch with async and await 

// async function getFacts(){
//     try{
//         let res = await fetch(url);    //  we will wait for succesfull call then print our response 
//         let data = await res.json();
//         console.log(data);
//     } catch(e){
//         console.log("Error- ", e);
//     }
// }


// using Axios , an alternative of fetch and more clean and powerful that it ....
// getting data withb apis.....

// let url = "https://catfact.ninja/fact";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let fact = await getData();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// async function getData(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;      // now we simply write req.data.fact  etc.....
//     }catch(e){
//         console.log("Error- ", e);
//         return "No Fact Found !"
//     }
// }

let url1 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let link = await getImage();
    // console.log(img);
    let img = document.querySelector("#result");
    img.setAttribute("src" , link);
    
});



async function getImage(){
    try{
        let res = await axios.get(url1);
        return res.data.message ;    // now we simply write req.data.fact  etc.....
    }catch(e){
        console.log("Error- ", e);
        return "/"
    }
}
