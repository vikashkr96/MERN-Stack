// for of loop     

let friends = ["Nasir" , "Nandini" , "Niketa" , "Vikash" , "self"];

for (friend of friends){
    console.log(friend);
}

let word = "Manifestation";
for (char of word){
    console.log(char);
}


// nested for of loops 

 let nested_list = [
    ["apple", "banana", "cherry"],
    ["dog", "cat", "bird"],
    ["red", "green", "blue"]
]
for(list of nested_list){
    for (items of list){
        console.log(items)
    }
}

