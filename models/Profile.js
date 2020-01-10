const mongoose = require("mongoose");
const Schema = mongoose.Schema


const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  aboutme: {
    type: String
  },
  goals:[
    {
      goal: {
        type: Schema.Types.ObjectId,
        ref: "goal"
      }
    }
  ],
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
