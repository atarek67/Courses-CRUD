const express = require('express');
const router = express.Router();
const coursesController = require("../Controllers/CourseControllers");//My Functions in Controller

//To get all Courses
router.get("/",coursesController.getAllCourses );

//To Create a course using POST method
router.post("/", coursesController.createCourse);

//Delete single course by find by ID and Delete
router.delete("/:id",coursesController.deleteCourseById);

//function to get a specfific Course by ID
router.get("/:id",coursesController.getCourseById)

//function de update specific Course by ID 
router.patch("/:id", coursesController.updateCourseByID)

module.exports = router;