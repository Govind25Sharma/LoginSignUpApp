const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const table = require("./model/table")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://GSproject:GSproject@project.bp0rm.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Project")


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    table.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json({ success: false, message: "Password is incorrect!" });
                }
            } else {
                res.json({ success: false, message: "No user found with this email!" });
            }
        })
        .catch(err => {
            console.error("Error during login:", err);
            res.status(500).json({ success: false, message: "Server error. Please try again later." });
        });
});

app.post("/register", (req, res) => {
    table.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})