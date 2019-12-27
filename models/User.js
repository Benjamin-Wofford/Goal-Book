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

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  goalsCompleted: {
    type: Number, 
    default: 0
  },
  motto: {
    type: String
  },
  goals: {
    type: [goalSchema]
  }
});

module.exports = User = mongoose.model("user", UserSchema);
