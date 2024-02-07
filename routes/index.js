const express = require("express");
const router = express.Router();

// הגדרת הראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
    res.json({msg:"index work work"})
})

// export defult
module.exports = router;
