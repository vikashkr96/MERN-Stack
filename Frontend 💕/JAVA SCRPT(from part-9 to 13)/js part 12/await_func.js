function getNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*50)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    try{
        await getNumber();
        await getNumber();
        await getNumber();
        await getNumber();
        await getNumber();
        getNumber();
        }catch(err){
            console.log("error found");
            console.log(err);

        }
}

// we have used try catch block to handle errors when happend in the middle of any execution staeps ..........