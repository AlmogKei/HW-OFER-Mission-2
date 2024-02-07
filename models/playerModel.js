const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name:String,
    age:Number
})

exports.playerSchema = mongoose.Mongoose.model("players",playerSchema)