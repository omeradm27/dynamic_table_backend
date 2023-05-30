const express=require("express");
const table=require("./tableRouter")


const router=express.Router();
    
router.use("/table",table);


 module.exports=router;