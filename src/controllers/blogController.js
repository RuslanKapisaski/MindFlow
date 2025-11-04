import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import blogService from "../services/blogService.js";
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
});
export default blogController;
