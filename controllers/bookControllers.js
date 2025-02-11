const Book = require("../models/Book.js");
const Author = require("../models/Author.js");

const createBook = async (req, res) => {
    try {
        const { title, year, authorId } = req.body;

        const author=await Author.findById(authorId)
        if(!author)return res.status(404).json({ message: "Author not found" });

        const book = new Book({ title,year, author: authorId });
        const savedBook = await book.save();

        await Author.findByIdAndUpdate(authorId, { $push: { books: savedBook._id } });

        res.status(201).json(savedBook);
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ message: "Internal Server Error" });
    };
};

const allBooks=async(req,res)=>{
    try{
        const books=await Book.find()
        res.status(200).json(books)
    }catch(error){
        console.error("Error fetching ALL books ",error)
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getBooks=async(req,res)=>{
    try{
        const books=await Book.find().populate("author","-_id -books")
        res.status(200).json(books)
    }catch(error){
        console.error("Error fetching books: ",error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = { createBook, getBooks, allBooks };