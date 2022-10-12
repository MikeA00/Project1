const config = require('config');
const dbConfig = config.get('Gabi_.dbConfig.dbName');

const { MongoClient } = require("mongodb");
 
const client = new MongoClient(dbConfig);
 
// The database to use
const dbName = "gabi";

// inserting order
 async function insertingOrder() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
         // Using collection order
        const col = db.collection("order");

         let orderdocument = {
            //field of order
             "name": "Abebe Kebede" ,
             "date": new Date(), 
             "phoneNumber": "+251962385614",
             "Destination": "Addis Ababa, Ethiopia",
             "paid": true,
             'orderId':"p123",
         }
         const p = await col.insertOne(orderdocument);
        } catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}

//reading order data from DB
async function readingOrder() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
         // Using collection order
        const col = db.collection("order");

         const p = await col.findOne({paid:true});
         console.log(p);
        } catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}

//deleting order from db
async function deletingOrder() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
         // Using collection order
        const col = db.collection("order");

         const p = await col.deleteOne({paid:true});
        } catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}
//inserting product to DB
async function insertingProduct() {
    try {
        await client.connect();
        console.log("Connected to server");

         const db = client.db(dbName);
         // Using collection product
         const col = db.collection("product");
         let productDocument = {
            //field of order
             "Image": new Date(),
             "price": "2500",
             "orderId": "",
             "Quantity": 7,
             "price":"p123",
         }
         const p = await col.insertOne(productDocument);
        }catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}

//updating product in DB
async function updatingProduct() {
    try {
        await client.connect();
        console.log("Connected to server");

         const db = client.db(dbName);
         // Using collection product
         const col = db.collection("product");
         let productDocument = {
            //field of order
             "Image": new Date(), 
             "price": "2500",  
             "orderId": "",
             "Quantity": 7,
             
         }
         const p = await col.updateOne({price:"p123"},{$set:{price:5000}});
        }catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}
//reading product data from DB
async function readingProduct() {
    try {
        await client.connect();
        console.log("Connected to server");

         const db = client.db(dbName);
         // Using collection product
         const col = db.collection("product");
         let productDocument = {
            //field of order
             "Image": new Date(), // May 23, 1912                                                                                                                                 
             "price": "2500",  // May 7, 1954                                                                                                                                  
             "orderId": "",
             "Quantity": 7,
             "price":"p123",
         }
         const p = await col.findOne();
         console.log(p);
        }catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}
//deleting product data from DB
async function deletingProduct() {
    try {
        await client.connect();
        console.log("Connected to server");

         const db = client.db(dbName);
         // Using collection product
         const col = db.collection("product");

         await col.deleteOne({Quantity:7});
         
        }catch (err) {
         console.log(err.stack);
        }
        finally{
            await client.close();
            console.log("Disconnected correctly to server");
        }
}
//deletingOrder().catch(console.dir);
//insertingProduct().catch(console.dir);
