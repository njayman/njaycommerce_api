const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: ""
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Customer", CustomerSchema);