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

// to tackle this issue - " when customer is deleted his order rmains in the db we will use pre and post middlewares "
// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("pre middleware ! ");
// });

// here we need post middleware 
customerSchema.post("findOneAndDelete", async(customer)=>{
    if(customer.orders.length){
        result = await Order.deleteMany({_id:{$in:customer.orders}});
        console.log(result);
    }
});




const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);



// Functions 

const findCustomer = async()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}


const addCustomer = async()=>{
    let newCust = new Customer({
        name: "Karan Arjun"
    });

    let newOrder = Order({
        item: "Litti Chokha",
        price: 200
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("Added new customer !");
    
}

// addCustomer();     // customer and order added sucessfully  in db // re added karan arjun with Burger this time to check the deletions

// deleting it normally 
const deleteCustomer = async()=>{
    let data = await Customer.findByIdAndDelete('69b02b72e20837e3b890c907');
    console.log(data);
}
deleteCustomer();   /// in the db customer is deleted but its order is still there its not deleted 
   //  Now when a Customer is deleted → Orders also delete automatically.

   // yes its working the litti chokha automatically deleted whene i deleted karan arjun 

























// previously added values in db ...........
// const addCustomer = async()=>{
//     let cust1 = new Customer({
//         name: 'Vikash Kumar'
//     });

//     let order1 = await Order.findOne({item:"Chips"});
//     let order2 = await Order.findOne({item:"Chocolate"});   

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);  // this will push only the orderid not exact order details ....

//     let res = await cust1.save();
//     console.log(res);
// }

// addCustomer();


// const addOrders = async ()=>{
//     let res = await Order.insertMany([
//         {item:"Samosa", price:12},
//         {item: "Chips", price:20},
//         {item: "Chocolate", price:40}
//     ]);
//     console.log(res);
// }

// addOrders();
