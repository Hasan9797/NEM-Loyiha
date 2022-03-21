const User = require("../Modules/User");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
    const {password, email} = req.body;
    User.findOne({email}, async (err, same) => {
       if(same){
           const validPassword = await bcrypt.compare(password, same.password)
           if(validPassword){
               res.redirect("/");
           }else{
               res.redirect("/login");
           }
       }else{
           return res.redirect("/login");
       }
    })
}