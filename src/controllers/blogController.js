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
});
export default blogController;
