const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    bought: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: String,
        default: Date.now(),
    },
    quantity: {
        type: Number,
        default: 1,
    },
    category: {
        type: String,
        default: "Unclassified"
    },
    image: {
        type: String,
        default: "",
    },
    link: {
        type: String,
    }
})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;