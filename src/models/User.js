import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    minLength: [2, "Username is too short!"],
  },
  email: {
    type: String,
    required: [true, "User email is required!"],
    minLength: [10, "Email is too short!"],
  },

  password: {
    type: String,
    required: [true, "User password is required!"],
    minLength: [4, "Password is too short!"],
  },
});

//Check repeat password field
userSchema
  .virtual("repeatPassword")
  .get(function () {
    return this._repeatPassword;
  })
  .set(function (value) {
    this._repeatPassword = value;
  });

userSchema.pre("validate", function () {
  if (this.isNew && this.password !== this._repeatPassword) {
    throw new Error("Passwords missmatch!");
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = model("User", userSchema);

export default User;
