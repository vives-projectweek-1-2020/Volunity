const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json({
        success: true,
        results: [
            { username: 'user1' },
            { username: 'user2' },
            { username: 'user3' },
        ]
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