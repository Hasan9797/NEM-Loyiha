const Post = require("../Modules/Post");

module.exports = async (req, res) => {
    const posts = await Post.find()
    res.render("index", {posts});
}