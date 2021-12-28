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
    },
    image: {
        type: String,
        default: "https://media.dior.com/couture/ecommerce/media/catalog/product/n/L/1627465591_M0446CTZQ_M928_E03_ZH.jpg",
    }
})

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;