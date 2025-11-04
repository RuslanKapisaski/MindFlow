import Blog from "../models/Blog.js";
export default {
  getAll() {
    return Blog.find();
  },
};
