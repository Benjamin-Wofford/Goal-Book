const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
// The route to the application is POST api/users
// The description: Sign-up user
// Who can access this route. Anyone. No JSW required.

router.post(
  "/signup",
  [
    check("name", "A name is required")
      .not()
      .isEmpty(),
    check("email", "A valid email is required").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // See if user exists
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        password,
        avatar,
        createdAt,
        goalsCompleted,
        motto,
        goals
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      // Return jsonwebtoken

      res.send("User registered");
    } catch (error) {
      console.log(error);
      res.sendStatus(500).send("Server error");
    }
  }
);

module.exports = router;
