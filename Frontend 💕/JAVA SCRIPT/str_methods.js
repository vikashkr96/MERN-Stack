let str = "Hello        ";
console.log(str.trim());

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("He"));
console.log(str.indexOf("l"));
console.log(str.indexOf("v"));

// method chaining 

a = str.trim().toUpperCase();
console.log(a);

// slice methods 

let str1 = "ILoveCoding";
    console.log(str1.slice(5));
    console.log(str1.slice(1,4));
    console.log(str1.slice(-3));
    console.log(str1.slice(length -3));


// replace methods 

let str3 = "ILoveCoding";
console.log(str3.replace("Love","Do"));
console.log(str3.replace("o","f"));

// repeat method 

let str2 = "Mango";
console.log(str2.repeat(57));


