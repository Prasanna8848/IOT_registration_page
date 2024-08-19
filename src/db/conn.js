require('dotenv').config()
const mongoose = require("mongoose")
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.crojx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
}).then(() => {
    console.log(`connection Successful`);
}).catch((e) => {
    console.log(e.message);
})