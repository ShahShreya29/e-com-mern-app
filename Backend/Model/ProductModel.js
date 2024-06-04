const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    qty: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    size: [{
        name: { type: String },
        qty: { type: Number },
    }],
    img: {
        type: String
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
    }],
    numRate: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

const product = mongoose.model("product", productSchema)
module.exports = product;   