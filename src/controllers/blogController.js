import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
const blogController = Router();
blogController.get("/catalog", async (req, res) => {
});
export default blogController;
