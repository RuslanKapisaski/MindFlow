import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../constants/constants.js";

export function authMiddleware(req, res, next) {
	const token = req.cookies["auth"];

	if (!token) {
		return next();
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);

		req.user = decodedToken;
		req.isAuthenticated = true;

		//Handlebars context
		res.locals.user = decodedToken;
		res.locals.isAuthenticated = true;

		next();
	} catch (err) {
		res.clearCookie("auth");
		res.redirect("/users/login");
	}
}
