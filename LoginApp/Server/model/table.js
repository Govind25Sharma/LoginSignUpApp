const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: Number,
    email: String,
    password: String
})

const table = mongoose.model("table", tableSchema)
module.exports = table