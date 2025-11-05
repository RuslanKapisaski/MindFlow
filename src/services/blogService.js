import Blog from "../models/Blog.js";
export default {
  create(blogData, userId) {
    return Blog.create({ ...blogData, owner: userId });
  },
  getAll() {
    return Blog.find();
  },
};
