const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin(origin, callback) {
        return callback(null, true)
    },
    optionsSuccessStatus: 200,
    credentials: true,
}))

app.use((req, res, next) => {
    res.set('Cache-Control', 'No-Cache')
    next()
})

app.use(require('./services'))
app.use(require('./middleware/auth'), require('./requests'))

app.listen(process.env.PORT || 8080, () =>
    console.log(`Volunity api listening on port ${process.env.PORT || 8080}!`),
)