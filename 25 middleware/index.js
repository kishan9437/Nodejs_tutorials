const express = require('express')
const app = express();

const reqFilter = (req, res, next) => {
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

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('welcome to Home page')
})

app.get('/about', (req, res) => {
    res.send('welcome to About page')
})

app.listen(5000)