const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("Connection Successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  await Chat.insertMany([
    { from: "bob", to: "adam", msg: "How are you adam!", created_at: new Date() },
    { from: "Amit", to: "Ayush", msg: "How are you and what are you doing!", created_at: new Date() },
    { from: "boby", to: "adamollaaaa", msg: "ram ram bhai!", created_at: new Date() },
    { from: "lalit", to: "kuntal", msg: "abe kaha hai!", created_at: new Date() },
    { from: "bob", to: "adam", msg: "How are you adam!", created_at: new Date() }
  ]);

  console.log("Chats inserted");
}