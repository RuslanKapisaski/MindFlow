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

  getLatest() {
    return Blog.find().sort({ _id: -1 }).limit(3);
  },

  getAllByOwner(ownerId) {
    return Blog.find({ owner: ownerId });
  },

  getAllByFollower(followerId) {
    return Blog.find().in("followers", followerId);
  },

  async follow(blogId, userId) {
    const blog = await Blog.findById(blogId);
    if (blog.owner.equals(userId)) {
      throw new Error(`Owner cannot follow blog!`);
    }

    blog.followers.push(userId);

    return blog.save({ runValidators: true });
    //return Blog.findByIdAndUpdate(blogId, { $push: { followers: userId } });
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
