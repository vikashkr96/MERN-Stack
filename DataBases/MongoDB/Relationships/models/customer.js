const { address } = require("framer-motion/client");
const { Type } = require("lucide-react");
const mongoose = require("mongoose");

main().then(()=>{
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = mongoose.Schema({
    item: String,
    price: Number
});


const customerSchema = mongoose.Schema({
    name:String,
    orders:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
        },
    ],
});





const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);


//const addCustomer = async()=>{
//    let cust1 = new Customer({
//        name: 'Vikash Kumar'
//   });
//
//    let order1 = await //Order.findOne({item:"Chips"});
//    let order2 = await //Order.findOne({item:"Chocolate"});   

//    cust1.orders.push(order1);
//    cust1.orders.push(order2);  // this will push only the orderid not //exact order details ....

//    let res = await cust1.save();
//    console.log(res);
//}

//addCustomer();





// const addOrders = async ()=>{
//     let res = await Order.insertMany([
//         {item:"Samosa", price:12},
//         {item: "Chips", price:20},
//         {item: "Chocolate", price:40}
//     ]);
//     console.log(res);
// }

// addOrders();