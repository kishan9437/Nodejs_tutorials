module.exports=reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('please provide your age');
    }
    else if (req.query.age < 18) {
        res.send('Sorry, you are not old enough to access this page')
    }
    else {
        next()
    }
}
