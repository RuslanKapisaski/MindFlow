import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateAuthToken from "../utils/tokenUtils.js";
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

    const token = generateAuthToken(createdUser);

    return token;
  },

  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("This user does not exist!");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid password!");
    }

    const token = generateAuthToken(user);
    return token;
  },
};
