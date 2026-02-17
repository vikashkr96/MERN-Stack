const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("Connection Successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// now we have to create an Schema for storing our documents into the  collections, so..

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age:Number
});

// now collection is ready!,  now how can we store documents in our collections ?
//....... we use models to contruct the documents

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name:"Adam",
//   email:"adam123@gmail.com",
//   age:48
// });
// const user2 = new User({
//   name:"bob",
//   email:"bob45@gmail.com",
//   age:48
// });

// insert many

User.insertMany([
  {name:"vikash", email:"vk4845646@gmail.com", age:20},
  {name:"rakesh", email:"rakeshkr1782@gmail.com", age:20},
  {name:"amit", email:"amitkr1234@gmail.com", age:20}
]).then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);
});

// now checking it in the mongosh shell by running : db.users.find()   => no output

// user1.save()
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log("some error happened !");
// });
// user2.save()                       // now we can see the output in the shell
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log("some error happened !");
// });  






