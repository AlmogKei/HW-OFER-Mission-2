// שיעורי בית
const mongoose = require("mongoose");

const vipsSchema = new mongoose.Schema({
    name: String,
    worth: String,
    birth_year: String,
    source: String, 
    country: String
});

// Corrected line: use mongoose.model instead of mongoose.Mongoose.model
exports.VipModel = mongoose.model("vips", vipsSchema);

// פונקציה שתבדוק תקינות הבאדי שנשלי בתהאם לסכמה
exports.validateVips = (_reqBody) => {
    const joiSchema = Joi.object({
        // requires - מחייב שהמאפיין יהיה קיים בבאדי
        name: Joi.string().min(2).max(100).required(),
        worth: Joi.number().min(0).max(10000).required(),
        birth_year: Joi.number().min(1900).max(2024).required(),
    })
    return joiSchema.validate(_reqBody);
}