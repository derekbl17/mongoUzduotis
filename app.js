require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose")
const cors=require("cors")
const connectingDB=require("./config/db.js")
const app = express();
app.use(cors())
app.use(express.json());
const PORT=process.env.PORT || 777
connectingDB()
const authorRoutes=require("./routes/authorRoutes.js")
const bookRoutes=require("./routes/bookRoutes.js");

//=================================================

app.use("/api",authorRoutes)
app.use("/api",bookRoutes)




//
//
//
//
app.listen(PORT,()=>console.log(`Server UP on port: ${PORT}`))