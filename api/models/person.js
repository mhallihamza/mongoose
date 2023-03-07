'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const personSchema = new Schema({
        name: {
            type:String,
            required:true
        },
        age: Number,
        favoriteFoods: [String],
    });

// create and export model
module.exports = mongoose.model("Person", personSchema);
