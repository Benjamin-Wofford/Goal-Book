const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("users");
  }
);

module.exports = router;
