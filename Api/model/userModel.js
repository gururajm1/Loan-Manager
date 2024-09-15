const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;

const LoanDetailsSchema = new Schema({
  date: { type: String }, //
  time: { type: String }, //
  status: { type: String, default: "pending" },
  loanAmount: { type: Number },
  loanTenure: { type: Number },
  employmentStatus: { type: String },
  reason: { type: String }, 
  employmentAddress: { type: String }, 
  houseAddress: { type: String },
});

const UserSchema = new Schema({
  isAdmin: { type: Boolean, default: false },
  uuid: { type: String, unique: true, default: uuidv4 }, 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  loanDetails: { type: [LoanDetailsSchema], default: [] },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
