import { Schema, Types, model } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, "Blog title is required!"],
    minLength: [5, "Ttile is too short!"],
    maxLength: [50, "Title is too long!"],
  },
  image: {
    type: String,
    required: [true, "Blog image is required!"],
    match: [/^https?\:\/\/.+$/],
  },
  content: {
    type: String,
    required: [true, "Blog content is required!"],
    minLength: [10, "Content is too short!"],
  },
  category: {
    type: String,
    required: [true, "Blog category is required!"],
    minLength: [3, "Category is too short!"],
  },
  followers: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Blog = model("Blog", blogSchema);

export default Blog;
