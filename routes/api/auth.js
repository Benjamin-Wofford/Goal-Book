const express = require('express')
const router = express.Router()

// The route to the application is GET api/auth
// The description: Test route
// Who can access this route. Anyone. No JSW required. 

router.get('/', (req, res) => res.send("auth"))

module.exports = router