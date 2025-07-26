function multipleGreet(func,n){         // higher order function ....
    for(let i =1 ; i<= n ; i++ ){
        func();
    }
}
// creating the function to be passed as argument 
let greet = function(){
    console.log("Hello");
}

// calling the function by passing the another function as an argument ......
multipleGreet(greet,5);
//          or
multipleGreet(function(){console.log("hello ji")} , 5); // dono ek hi baat hai 


// ------------------------------------------------------------------//

// higher order functions thet returns a function🙂 ...
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request == "even"){
        return function(n){
            console.log( n%2 == 0);
        }
    }else{
        console.log("Wrong Request!");
    }
}
