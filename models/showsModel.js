// שיעורי בית

const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema({
    name: String,
    genere: String,
    kind: String,
    views: Number,
    image: String,
    description: String
});

// Corrected line: use mongoose.model instead of mongoose.Mongoose.model
exports.ShowModel = mongoose.model("shows", showsSchema);

// פונקציה שתבדוק תקינות הבאדי שנשלי בתהאם לסכמה
exports.validateShows = (_reqBody) => {
    const joiSchema = Joi.object({
        // requires - מחייב שהמאפיין יהיה קיים בבאדי
        name: Joi.string().min(0).max(10000).required(),
        genere: Joi.string().min(0).max(10000).required(),
        kind: Joi.string().min(0).max(1000).required(),
        views: Joi.number().min(0).max(9999999).required(),
        
    })
    return joiSchema.validate(_reqBody);
}