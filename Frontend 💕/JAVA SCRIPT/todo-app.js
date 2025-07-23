let todo = [];

let req = prompt("Enter your request : ");
while (true) {
    if (req == "quit") {
        console.log("quitting the app....");
        break;
    }
    if (req == "list") {
        console.log("------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------------");
    } else if (req == "add") {
        let req_1 = prompt("Enter your task");
        todo.push(req_1);
        console.log("added successfully");
    } else if (req == "delete") {
        let req_2 = prompt("Enter the index of task you want to delete");
        todo.splice(req_2, 1);
        console.log("Task deleted");
    } else {
        console.log("Wrong Request");
    }

    req = prompt("Enter your request : "); 
}
