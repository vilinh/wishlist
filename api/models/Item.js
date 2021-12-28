const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
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
    }
})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;