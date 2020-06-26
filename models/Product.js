const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        default: ""
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", ProductSchema);