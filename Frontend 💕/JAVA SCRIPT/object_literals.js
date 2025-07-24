// creating object literals 

const student = {name:"vikash",
                 roll:11242641,
                 age:20,
                 city:"motihari"
                }
console.log(student);

const info = {height:6.2,
              weight:64,
              fav_food:["food1","food2"],
              fav_movie:["3 idiot","siddat"]
}
console.log(info);

console.log(student.roll);
console.log(student["roll"]);

let prop = "height";
console.log(info[prop]);
console.log(info.prop);

// manupulations on literals 

info.weight = 62.5;
console.log(info);
info.friends = "many";
console.log(info);
// delete 
delete info.fav_movie;
console.log(info);

