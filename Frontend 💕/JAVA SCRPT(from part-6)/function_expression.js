// examples of function expressions 

const names = function(){
    console.log("Vikash , Amit , Aayush");
}
names();

// factorial calculation using function expressions 

const fact = function(n){
    let factorial = 1;
    for(i=1 ; i<=n ; i++){
        factorial *= i;
    }
    console.log(`Factorial of ${n} is : ${factorial}`);
}
fact(5);

