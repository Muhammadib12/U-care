import mongoose, { Schema } from "mongoose";

const UserSchema = Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  personId: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", UserSchema);
export default User;
