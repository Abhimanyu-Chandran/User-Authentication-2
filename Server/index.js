const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const UserModel = require("./Model/user");

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://Abhimanyu:Abhimanyu@cluster0.b4iwvpn.mongodb.net/User-Data")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Failed to connect to MongoDB", err));

const userScheme = new mongoose.Schema({
    name: String, age: Number
})
const userModel = mongoose.model('User', userScheme);
const user1 = new userModel({
    name: "Abhimanyu", age: 20,
});
user1.save();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.post("/signup", async (req, res) => {
    try {
        const {name, email, password} = req.body;
        console.log(name + " " + email + " " + password);
        let UserModel;
        const existingUser = await UserModel.findOne({email});
        console.log(existingUser);
        if (existingUser) {
            return res.status(400).json({error: "Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({name, email, password: hashedPassword});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})