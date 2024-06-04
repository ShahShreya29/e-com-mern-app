const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
    },
    level: {
        type: String,
        required: true,
    },
})

const category = mongoose.model("category", categorySchema)
module.exports = category;


// cloths
    // dress
    // saree
     // tops
    // jeans

// makeup
    //lipstick
    //foundation
     //..
    //...
    //..

//Accessories
    //goggles
    //purse
    //bag
    //watch
    //cap
    //belt
    //stoles
    //jewelry

//footWare
    //Sports Shoes
    //Sneakers
    //Casual Shoes
    //Flipflops & Sliders
    //Formal Shoes
    //Sandals
    //Boots

//Home

    //Decor
    //Kitchen & Dining
    //Bedding
    //Bath
    //Storage
    //Home Essentials
    //Appliances


