const express = require('express')
const router = express.Router()

// The route to the application is GET api/users
// The description: Test route
// Who can access this route. Anyone. No JSW required. 

router.get('/', (req, res) => res.send("users"))

module.exports = router