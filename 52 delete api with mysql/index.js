const express = require('express');
const con = require('./config');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    con.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send("error");
        }
        else {
            res.send(result)
        }
    })
})

app.post('/', (req, res) => {
    let data = req.body;
    con.query("INSERT INTO users SET?", data, (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
})

app.put('/:id', (req, res) => {
    const data=[req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE users SET name = ? ,password = ?, user_type = ? where id = ?",data, (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    })
})

app.delete('/:id', (req, res) => {
    con.query("DELETE FROM users WHERE id="+req.params.id,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
app.listen(5000)