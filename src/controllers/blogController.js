import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import blogService from "../services/blogService.js";
import { getErrorMessage } from "../utils/getErrorMessage.js";

const blogController = Router();

blogController.get("/catalog", async (req, res) => {
  try {
    const blogs = await blogService.getAll();
    res.render("blogs/catalog", { blogs });
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    throw new Error(`Error during creating blogs: ${errorMessage}`);
  }
});

blogController.get("/create", isAuth, (req, res) => {
  res.render("blogs/create");
});

blogController.post("/create", isAuth, async (req, res) => {
  const blogData = req.body;
  const userId = req.user.id;

    const newBlog = await blogService.create(blogData, userId);
    res.redirect("/blogs/catalog");
blogController.get("/:blogId/delete", isAuth, async (req, res) => {
  const blogId = req.params.blogId;
  const userId = req.user.id;

  try {
    await blogService.remove(userId, blogId);
    res.redirect("/blogs/catalog");
  } catch (err) {
    res.render("404", { error: getErrorMessage(err) });
  }
});

blogController.get("/:blogId/edit", isAuth, async (req, res) => {
  const userId = req.user.id;
  const blogId = req.params.blogId;

  try {
    const blog = await blogService.getOneById(blogId);

  } catch (err) {
    res.render("404", { error: getErrorMessage(err) });
  }
  res.render("edit", { blog });
});

blogController.post("/:blogId/edit", async (req, res) => {
  const blogId = req.params.blogId;
  const blogData = req.body;

  try {
    await blogService.edit(blogId, blogData);
    res.redirect("/blogs/catalog");
  } catch (err) {
    res.render("edit", {
      blog: blogData,
      error: getErrorMessage(err),
    });
  }
});
export default blogController;
