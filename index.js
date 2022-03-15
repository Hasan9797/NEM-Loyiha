const express = require("express");
const path = require("path");
const expresEdege = require("express-edge");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://hasan:lGv4pJh14SLM9Qqh@cluster0.yroge.mongodb.net/MEN-Loyiha");

app.use(express.static("public"));

app.use(expresEdege.engine);
app.set("views", `${__dirname}/views`);
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/post", (req, res) => {
    res.render("post");
})

app.get("posts/new", (req, res) => {
    res.render("created");
})

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});

