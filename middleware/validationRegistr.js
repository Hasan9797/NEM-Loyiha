const ValidationRegistr = (req, res, next) => {
    if(!req.body.username || !req.body.email || !req.body.password){
        return res.redirect("/reg")
    }
    next();
}

module.exports = ValidationRegistr;