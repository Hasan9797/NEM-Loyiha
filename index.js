const express = require("express");
// const path = require("path");
const expresEdege = require("express-edge");
const mongoose = require("mongoose");
// const Post = require("./Modules/Post");
const fileUpload = require("express-fileupload");
const ValidationsMedliwear = require("./middleware/ValidationMedliwear");

//Controllers import
const HomePageCantroller = require("./Controllers/HomePage");
const getPostController = require("./Controllers/getPost");
const postNewController = require("./Controllers/postNew");
const createdController = require("./Controllers/created");

const app = express();

mongoose.connect("mongodb+srv://hasan:lGv4pJh14SLM9Qqh@cluster0.yroge.mongodb.net/MEN-project");

app.use(fileUpload());
app.use(express.static("public"));
app.use(expresEdege.engine);
app.set("views", `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", HomePageCantroller);
app.get("/post/:id", getPostController);
app.get("/postnew", postNewController);
app.post("/postnew/created", ValidationsMedliwear, createdController);

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});

