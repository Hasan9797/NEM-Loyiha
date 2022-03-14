const express = require("express");
const path = require("path");
const expresEdege = require("express-edge");

const app = express();

app.use(expresEdege.engine);
app.set("views", `${__dirname}/views`);

app.use(express.static("public"));

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

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});

