const Author=require("../models/Author.js")
const createAuthor=async(req,res)=>{
    try{
        const author=new Author(req.body)
        const result = await author.save()
        if(!result)return res.status(404).send("Not found");
        res.status(201).json(result)
    }catch(error){
        console.error("Error creating author: ", error)
        res.status(500).json({message: "error caught on createAuthor in authorControllers.js"})
    }
}
const fetchAuthors=async(req,res)=>{
    try{
        const authors=await Author.find()
        res.status(200).json(authors)
    }catch(error){
        console.error("error fetching authors: ",error)
    }
}
module.exports={createAuthor,fetchAuthors}
