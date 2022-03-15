const mongoose = require("mongoose");
const Post = require("./Modules/Post");

mongoose.connect("mongodb+srv://hasan:lGv4pJh14SLM9Qqh@cluster0.yroge.mongodb.net/MEN-Loyiha");

// lGv4pJh14SLM9Qqh

// Post.find({}, (err, post) => console.log(post));

// Post.find({title: "My second blog"}, (err, post) => console.log(post));

// Post.create({
//     title: "My second blog",
//     description: "My second description",
//     content: "Lorem ipsun second content"
// }, (err, post) => { console.log(err, post);})



// const http = require("http");

// const server = http.createServer( (req, res) => {

// })

// server.listen(5000, () => {console.log("server has been on port 5000...");})