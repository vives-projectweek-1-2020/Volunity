const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    const user = {
        firstName: 'test',
        lastName: 'gebruiker',
        email: 'test@volunity',
        language: 'en',
        registrationDate: new Date(),
    }
    const key = jwt.sign({user}, process.env.AUTH_SECRET || 'secret')

    res.json({
        key    
    })
})

router.get('/login', async (req, res) => {
    res.json({
        success: false,
        message: 'Not Implemented'
    })
})

module.exports = router