const express = require('express')
const app = express()
const mysql = require('mysql')

require('dotenv').config()

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

const apicall = (query) => {
    return new Promise((resolve, reject) => {
        if (query.trim().length == 0) return reject()

        try {
            connection = mysql.createConnection(connection.config);
            connection.connect()

            connection.query(query, function (err, rows, fields) {
                if (err) throw err
                
                console.log(rows[0])
    
                const result = rows[0] != undefined ? {
                    success: true,
                    results: rows,
                } : {
                    success: false, results: null
                }
    
                resolve(result)
            })
    
            connection.end()
        } catch(e) {
            console.log(e)
        }
    })
}

app.get('/users', (req, res) => {
    apicall('SELECT * FROM users').then(result => {
        return res.json(result)
    })
})

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
})

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
})

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
})

app.listen(process.env.PORT || 8080, () =>
    console.log(`Example app listening on port ${process.env.PORT || 8080}!`),
)
