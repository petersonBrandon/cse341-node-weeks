exports.getLogin = (req, res, next) => {
    res.render('login')
}

exports.postLogin = (req, res, next) => {
    console.log("Post success!!!");
    console.log(req.body);
}