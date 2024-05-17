const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose"); 
const dotenv = require("dotenv");
const cors = require("cors");
require('dotenv').config()
const app = express();

dotenv.config()

app.use(cors());
app.use(express.json({ extended: false, limit: "50mb" }));

// api names---
//example => app.use("/api/todo", require("./routes/todo"));

app.use("/api/userlist", require("./routes/userlist"));
app.use("/api/addstudents", require("./routes/addstudents"));
app.use("/api/addcourse", require("./routes/addcourse"));
app.use("/api/newsandannu", require("./routes/newsandannu"));
app.use("/api/request", require("./routes/request"));



const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI)
.then(()=> {

    //listen request
    app.listen(PORT, () =>{
        console.log('connected to db/Mongodb & listening to port',PORT)
    })
})
    .catch((error)=>{
        console.log(error)
    })