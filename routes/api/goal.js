const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Profile = require("../../models/Profile");
const Goal = require("../../models/Goal");

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await await User.findById(req.user.id).select("-password");

      const newGoal = new Goal({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const goal = await newGoal.save();

      res.json(goal);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// The route to the application is GET api/goal
// The description: Get all posts
// Who can access this route. Private.

router.get("/goalfeed", auth, async (req, res) => {
  try {
    const goals = await Goal.find().sort({ date: -1 });
    res.json(goals);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// The route to the application is GET api/goal/:id
// The description: Get a certain goal
// Who can access this route. Private.

router.get("/:id", auth, async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      return res.status(404).json({ msg: "Goal not found" });
    }

    res.json(goal);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Goal not found" });
    }

    res.status(500).send("Server error");
  }
});

// The route to the application is DELETE api/goal/:id
// The description: Delete a goal
// Who can access this route. Private.

router.delete("/:id", auth, async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      return res.status(404).json({ msg: "Goal not found" });
    }

    // Check user
    if (goal.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await goal.remove();

    res.json({ msg: "Goal removed." });
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Goal not found" });
    }

    res.status(500).send("Server error");
  }
});

module.exports = router;
