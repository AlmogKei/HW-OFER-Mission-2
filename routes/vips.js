const express = require("express");
// שיעורי בית
const { VipModel, validateVips } = require("../models/vipsModel");

const router = express.Router();



// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/", async (req, res) => {
    try {
      console.log("vipsModel:", VipModel); // Check if vipsModel is defined
      const data = await VipModel.find({});
      res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(502).json({ msg: "There is a problem, try again later", err });
    }
  });

router.post("/", async(req,res) =>{
    // בדיקה תקינות לבאדי
    const validBody = validateVips(req.body);
    // בודק אם יש שגיאה
    if(validBody.error){
        // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
        return res.status(400).json(validBody.error.details);
    }
    try{
        const vips = new vipsModel(req.body);
        await vips.save();

        res.json(vips);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
    
})

router.put("/:id",async(req,res) => {
    // בדיקה תקינות לבאדי
  const validBody = validateVips(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
    return res.status(400).json(validBody.error.details);
  }
    try{
        const id = req.params.id;
        // בקשת מחיקה לפי מאפיין האיי די
        const data = await vipsModel.updateOne({_id:id},req.body)
        // אם הצליח למחוק deletedCount:1
        res.json(data)
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }   
})

router.delete("/:id",async(req,res) => {
    try{
        const id = req.params.id;
        // בקשת מחיקה לפי מאפיין האיי די
        const data = await vipsModel.deleteOne({_id:id})
        // אם הצליח למחוק deletedCount:1
        res.json(data)
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }   
})

// export default
module.exports = router;
