const express = require('express')
const router = express.Router()

const mysql = require('mysql')

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

router.get('/users', (req, res) => {
    apicall('SELECT * FROM users').then(result => {
        return res.json(result)
    })
})

router.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
})

router.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
})

router.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
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

module.exports = router