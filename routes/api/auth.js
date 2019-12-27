const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
// The route to the application is GET api/auth
// The description: Test route
// Who can access this route. Authorized users. 

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server errror')
    }
})

module.exports = router