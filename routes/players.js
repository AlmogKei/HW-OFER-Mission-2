const express = require("express");
const router = express.Router();

// הגדרת הראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
    const data = await playerModel.find({});
    res.json(data);
})

// export defult
module.exports = router;
