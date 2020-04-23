const express = require('express')
const router = express.Router()

const mysql = require('mysql')

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

router.get('/orders/:id', (req, res) => {
    console.log(req.user.id) // <- req.user = userdata
    apicall(`SELECT * FROM orders WHERE id = ${req.params.id}`).then(result => {
    return res.json(result)
    })
})

router.post('/orders', (req, res) => {
    const order = { 
        minprice: req.body.minprice,
        maxprice: req.body.maxprice,
        storelocation: req.body.storelocation,
        storename: req.body.storename,
        endtime: req.body.endtime        
    }

    apicall(`INSERT INTO orders (min_price, max_price, store_location, store_name, end_time )
             VALUES ('${order.minprice}','${order.maxprice}','${order.storelocation}','${order.storename}','${order.endtime}')`).then(result => {
            console.log(result.results.insertId)
               req.body.products.forEach(element => {
                const orderlist = {
                    orderid: result.results.insertId,
                    brand: element.brand,
                    item: element.item,
                    quantity: element.quantity,
                    maxprice: element.maxprice
                }
                apicall(`INSERT INTO order_list (order_id, brand, item, quantity, maxprice)
                VALUES (${orderlist.orderid},'${orderlist.brand}','${orderlist.item}',${orderlist.quantity},${orderlist.maxprice})`)
                
                
            });
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
                    success: false, results: rows
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
