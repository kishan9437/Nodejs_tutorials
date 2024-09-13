const express = require('express');
const path=require('path');

const dirpath=path.join(__dirname, 'public')
const app = express();
// console.log(dirpath)

app.use(express.static(dirpath));
app.listen(4500)