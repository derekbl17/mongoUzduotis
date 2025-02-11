const express=require("express")
const {createBook,getBooks,allBooks}=require("../controllers/bookControllers.js")
const router=express.Router()
router.post("/books",createBook)
router.get("/books",getBooks)
router.get("/books/basic",allBooks)
module.exports=router