const Courses = require("../Models/CoursesModel")//my DB

//Functions here.................

const getAllCourses = async (req, res) => {
    //get data from DB
    await Courses.find()
        .then((result) => {
            res.render("all-courses", { arrayCourses: result });//de 3ashan el view
            // res.send(result) //De 3ashan a test 3ala el postman 
        }).catch((err) => {
            console.log("You have an Error" + err);
        });
}

const createCourse = (req, res) => {
    const coursesDB = new Courses(req.body);
    coursesDB
        .save()
        .then(() => {
            res.redirect("/all-courses");
        })
        .catch((err) => {
            console.log(err);
        });
}

const deleteCourseById = async (req, res) => {
    await Courses.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ myLink: "/all-courses" });
        }).catch((err) => {
            console.log("You have an Error--> " + err);
        });
}

const getCourseById = async (req, res) => {
    console.log(req.params.id);
    await Courses.findById(req.params.id)
        .then((result) => {
            res.render("details", { objCourses: result });//3ashan el view
            // res.send(result)//de 3ashan a test 3ala el postman
        }).catch((err) => {
            console.log("You have an Error" + err);
        });
}

const updateCourseByID = (req, res) => {
    try {
        console.log("Ehna gwa el Patch");
        let id = req.params.id;
        let updates = req.body;
        // let updates = req.body;
        // const options = {new:true};
        Courses.findByIdAndUpdate(id, updates, (error, data) => {
            if (error)
                console.log(error);
            else
                console.log("The old Course that has updated" + data);
            res.send("Updated Succussfully")
        })


    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    getAllCourses,
    createCourse,
    deleteCourseById,
    getCourseById,
    updateCourseByID,
}