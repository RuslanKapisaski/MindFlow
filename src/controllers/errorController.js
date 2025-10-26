import { Router } from "express";

const errorControlller = Router();

errorControlller.all("/*path", (req, res) => {
	res.render("404");
});
export default errorControlller;
