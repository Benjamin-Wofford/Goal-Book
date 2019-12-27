const mongoose = require("mongoose");

// Create goal sub-document to embed inside of User schema. May need to be altered if it doesn't work later.

const goalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  goals: {
    type: [goalSchema]
  },
  goalsCompleted: {
    type: Number,
    default: 0
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
