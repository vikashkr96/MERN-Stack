const n = prompt("Enter the number from 1 up to which you want the random no. :");
const num = Math.floor(Math.random() * n)+1;
let guess = prompt(`Enter your guess from 1 to ${n}`);
while(true){
    if(guess == "quit"){
        console.log("user quit...");
        break;
    }
    if(guess==num){
        console.log("You guessd it right!");
    }else if(guess < num ){
        guess = prompt("HINT: Your guess is small , try again..");
    }else{
        guess = prompt("HINT: Your guess is large , try again..");
    }

}