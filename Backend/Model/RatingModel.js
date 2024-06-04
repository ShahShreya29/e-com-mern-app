const mongoose = require("mongoose")

const ratingSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
})

const rating = mongoose.model("rating", ratingSchema)
module.exports = rating;   