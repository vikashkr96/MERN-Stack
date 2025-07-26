const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
}
console.log(calculator.add(2,5));
console.log(calculator.mul(2,200));


// using a shorthand for this ......

const calculator1 = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}
console.log(calculator1.add(2,10));

