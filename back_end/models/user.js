import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  createdAt: {type: Date, default: new Date()},
  lastUpdate:{type: Date, default: new Date()}
});

const User = mongoose.model("User", userSchema);

export default User;