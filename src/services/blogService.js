import Blog from "../models/Blog.js";

export default {
  create(blogData, userId) {
    return Blog.create({ ...blogData, owner: userId });
  },

  getOneById(blogId) {
    return Blog.findById(blogId).populate(["owner", "followers"]);
  },

  getAll() {
    return Blog.find();
  },
  edit(blogId, blogData) {
    return Blog.findByIdAndUpdate(blogId, blogData, { runValidators: true });
  },
};
