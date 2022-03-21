const User = require("../Modules/User");

module.exports = (req, res, next) => {  
    User.findById(req.session.userId, (req, user) => {
        if(err || !user){
            return res.redirec("/")
        }
        next();
    })
}