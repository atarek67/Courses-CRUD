const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const port = process.env.PORT || 7007;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const CoursesRoute = require('./Routes/CoursesRoute');


// for auto refresh
//#region auto-refresh
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});
//#endregion auto-refresh

// mongoose

//#region connect DB
mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0.eicfram.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    })

    .catch((err) => {
        console.log("-- You have an error in Mongoose connection -- " + err);
    });
//#endregion connnect db
///////////////////

//E3mly render ll home bta3ty el feha el form awel ma y3ml request ll /
app.get("/", (req, res) => {
    res.render("home");
});

app.use("/all-courses", CoursesRoute)//To get all-courses Routes
////////
app.use("/details", CoursesRoute)//To get details Routes

//  404 NOT FOUND
app.use((req, res) => {
    // res.status(404).send("Sorry can't find This Page ya idiot! <h1>NOT FOUND</h1>");
    res.render("not-found")
});