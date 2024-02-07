const express = require("express");
// שיעורי בית
const { ShowModel, validateShows } = require("../models/showsModel");

const router = express.Router();



// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/", async (req, res) => {
    try {
      console.log("ShowModel:", ShowModel); // Check if vipsModel is defined
      const data = await ShowModel.find({});
      res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(502).json({ msg: "There is a problem, try again later", err });
    }
  });

router.post("/", async(req,res) =>{
    // בדיקה תקינות לבאדי
    const validBody = validateShows(req.body);
    // בודק אם יש שגיאה
    if(validBody.error){
        // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
        return res.status(400).json(validBody.error.details);
    }
    try{
        const shows = new ShowModel(req.body);
        await shows.save();

        res.json(vips);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
    
})

router.put("/:id",async(req,res) => {
    // בדיקה תקינות לבאדי
  const validBody = validateShows(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
    return res.status(400).json(validBody.error.details);
  }
    try{
        const id = req.params.id;
        // בקשת מחיקה לפי מאפיין האיי די
        const data = await ShowModel.updateOne({_id:id},req.body)
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
        const data = await ShowModel.deleteOne({_id:id})
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
