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
    res.sendFile(path.join(__dirname, "pages/about.html"));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/contact.html"));
})

app.get("/post", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/post.html"));
})

app.listen(5000, () => {console.log("Server has been on PORT 5000...")});

