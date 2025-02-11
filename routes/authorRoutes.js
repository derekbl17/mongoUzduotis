const express=require("express")
const { createAuthor,fetchAuthors}=require("../controllers/authorControllers.js")
const router=express.Router()
router.post("/authors",createAuthor)
router.get("/authors",fetchAuthors)
module.exports=router