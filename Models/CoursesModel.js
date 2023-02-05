const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);
// define the Schema (the structure of the article)
const coursesSchema = new Schema({
    courseName: String,
    courseTitle: String,
    courseNumber: String,

}, { versionKey: false });

// Create a model based on that schema
const Courses = mongoose.model("Courses", coursesSchema);

// export the model
module.exports = Courses;