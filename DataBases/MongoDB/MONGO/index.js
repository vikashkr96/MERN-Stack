const mongoose = require('mongoose');

main()
  .then(() => {
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
  age: Number
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

// User.insertMany([
//   {name:"vikash", email:"vk4845646@gmail.com", age:20},
//   {name:"rakesh", email:"rakeshkr1782@gmail.com", age:20},
//   {name:"amit", email:"amitkr1234@gmail.com", age:20}
// ]).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// });

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


// // find operations ........
// User.find({}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.find({age:{$gt:45}}).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// update operations ....
// User.updateOne({name:"vikash"} , {age: 21}).then((res)=>{
//   console.log("updated");
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// User.find({}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });   // working successfully...

// User.findOneAndUpdate({ name: "vikash" }, { age: 20 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// delete methods 

// User.deleteOne({name:"rakesh"}).then((res)=>{
//   console.log("User deleted");
// });

// // delete many....
// User.deleteMany({age:48}).then((res)=>{
//   console.log("deleted");
// });

User.findOneAndDelete({name:"amit"}).then((res)=>{
  console.log("The deleted document is: ")
  console.log(res);
});

// Also we can use schema vlidations with these attributes.....like required , default

