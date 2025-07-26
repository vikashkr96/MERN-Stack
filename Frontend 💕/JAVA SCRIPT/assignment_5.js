// Qs1. Create a program that generates a random number 
//      representing a dice roll. The number should be between 1 and 6.

const dice = Math.floor(Math.random()*6)+1;
console.log(`Dice rolled out to be ${dice}`);


// Qs2. Create an object representing a car that stores the following 
//      properties for the car: name, model, and color. Print the car’s name.

const car = {Name : "Fortuner" , model : 2028 , color : "White" }
console.log(car.Name);


// Qs3. Create an object Person with their name, age, and city. Edit the 
//      original value of their city to change it to “New York”. 
//      Add a new property country and set it to “United States”.

let personInfo = {Name : "Jon Doe" , Age : 28 , city : "San Francisco" };
console.log(personInfo);
personInfo.city = "New York";
console.log(personInfo);
personInfo.Country = "United States";
console.log(personInfo);





