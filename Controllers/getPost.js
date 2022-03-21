const Post = require("../Modules/Post");

module.exports =  async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "username")
    res.render("post", {post});
}