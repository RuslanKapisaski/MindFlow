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
  async remove(userId, blogId) {
    const blog = await Blog.findById(blogId);

    if (!blog.owner.equals(userId)) {
      throw new Error("Cannot delete if you are not an owner!");
    }
    return Blog.findByIdAndDelete(blogId);
  },

  edit(blogId, blogData) {
    return Blog.findByIdAndUpdate(blogId, blogData, { runValidators: true });
  },
};
