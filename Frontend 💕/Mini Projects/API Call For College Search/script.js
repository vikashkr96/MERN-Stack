let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(coll of colleges){
        console.log(coll.name);
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(`http://universities.hipolabs.com/search?name=${country}`);
        return res.data;
    } catch (err) {
        return [];
    }
}
