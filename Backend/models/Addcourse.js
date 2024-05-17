const mongoose = require("mongoose")
const redis = require('redis');


const AddcourseSchema = mongoose.Schema({
   courseName: String,
})

module.exports = mongoose.model("Addcourse", AddcourseSchema);