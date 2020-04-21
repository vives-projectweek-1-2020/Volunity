const jwt = require('jsonwebtoken')

function checkToken(req) {
    const authHeader = req.headers.authorization
    const cookieHeader = req.headers.cookie

    let token = ''

    if (authHeader) token = authHeader.split(' ')[1]
    else if (cookieHeader) {
        const cookies = cookieHeader.split('; ').map((stringCookie) => stringCookie.split('='))
        const cookie = cookies.find((cookie) => cookie[0] === '_volunity_auth')
        if (cookie) token = cookie[1]
    } else if (req.query.key) {
        token = req.query.key.trim()
    } else return false

    return jwt.verify(token, process.env.AUTH_SECRET || 'secret', (err, decoded) => {
        if (err) return false

        req.user = Object(decoded).user

        return true
    })
}

module.exports = (req, res, next) => {
    const isAuth = checkToken(req)

    if (isAuth) next()
    else {
        res.status(401).send({
            error: 401,
            message: 'unauthorized',
        })
    }
}


