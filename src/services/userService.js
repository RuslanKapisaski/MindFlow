import User from "../models/User.js";
export default {
  async register(username, email, password, repeatPassword) {
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User with this email already exists!");
    }

    const createdUser = await User.create({
      username,
      email,
      password,
      repeatPassword,
    });
};
