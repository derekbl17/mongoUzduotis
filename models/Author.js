const mongoose=require("mongoose")
const authorSchema=new mongoose.Schema({
    firstname:{type:String, required:[true, "First name field cant be empty"]},
    lastname:{type:String,required:[true, "Last name field cant be empty"]},
    books:[{type:mongoose.Schema.Types.ObjectId,ref:"Book"}]
})
const Author = mongoose.model("Author",authorSchema)
module.exports=Author;