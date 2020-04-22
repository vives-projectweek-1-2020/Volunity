const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const mysql = require('mysql')

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})



const users = []
router.get('/users', (req, res) => {
        
    return res.json(users)
    
})

router.post('/users', (req, res) => {
    const user = {name: req.body.name, password: req.body.password}
    users.push(user)
    // apicall(`ÌNSERT INTO users`)
    return res.json(req.body);
})

router.post('/signup', async (req, res) => {
    const user = {
        firstname: req.body.firstname, 
        lastname: req.body.lastname,
        email: req.body.email,
        street: req.body.street,
        nr: req.body.nr,
        city: req.body.city,
        postalcode: req.body.postalcode,
        password: req.body.password
    }
    apicall(`INSERT INTO users (firstname, lastname, email, street, number, city, postal_code, password) VALUES ('${user.firstname}', '${user.lastname}', '${user.email}', '${user.street}', '${user.nr}', '${user.city}', '${user.postalcode}', MD5('${user.password}'))`).then(result => {
        
        console.log(result)
        const r = JSON.stringify({
            id: result.results.insertId,
            ...user
        }, (key, val) => {
            if (key != 'password') return val;
        })
        const key = jwt.sign(JSON.parse(r), process.env.AUTH_SECRET || 'secret')
        return res.json({key})
    }).catch((reason) => {
        return res.json({
            success: false,
            reason
        })
    })

})

router.post('/login', async (req, res) => {
    
    const user = {email: req.body.email, password: req.body.password}
    apicall(`SELECT *
             FROM users
             WHERE password = MD5('${user.password}') AND email = '${user.email}'`).then((result)=> {
                if (!result.success) return res.json(result)
                const r = JSON.stringify(result.results[0], (key, val) => {
                     if (key != 'password') return val;
                 })
                 const key = jwt.sign(JSON.parse(r), process.env.AUTH_SECRET || 'secret')
                 return res.json({
                    success: result.success,
                    result: JSON.parse(r),
                    key
                 });
             }).catch((reason) => {
                 return res.json(reason)
             })
    
    
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
                    success: rows.affectedRows > 0, results: rows
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
