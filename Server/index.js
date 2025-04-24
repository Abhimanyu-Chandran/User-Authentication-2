const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://Abhimanyu:Abhimanyu@cluster0.b4iwvpn.mongodb.net/User-Data")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

const userScheme = new mongoose.Schema({
    name: String,
    age : Number
})
const userModel = mongoose.model('User', userScheme);
const user1 =new userModel({
    name: "Abhimanyu",
    age: 20,
});
user1.save();

app.listen(process.env.PORT,()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
});