const ValidationMedilwear = (req, res, next) => {
    if(!(req.files && req.files.image) || !req.body.title || !req.body.description || !req.body.content)
    {
        return res.redirect("/postnew")
    }
    next();
}

module.exports = ValidationMedilwear;