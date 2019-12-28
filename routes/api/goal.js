const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Goal = require('../../models/Goal')
// The route to the application is POST api/goal
// The description: Create goal
// Who can access this route. Private.

router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
          return res.status(400).json({ errors: errors.array() })
      }

    
      try {
        const user = await (await User.findById(req.user.id).select('-password'))

        const newGoal = new Goal({
            text: req.body.text, 
            name: user.name, 
            avatar: user.avatar, 
            user: req.user.id
        })
        
        const goal = await newGoal.save()

        res.json(goal)

      } catch (error) {
          console.error(error.message)
          res.status(500).send('Server error')
      }
      
    }
);

module.exports = router;
