const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

// connection.connect((error) => {
//     if (error) {
//         console.log('Error connecting to database', error)
//     }
//     else {
//         console.log('Connected to MySQL database')
//     }
// })

connection.query('SELECT * FROM users', (error, result) => {
    console.log("result: ", result)
})