import { getErrorMessage } from "../utils/getErrorMessage.js";

export function errorMiddleware(error, req, res, next) {
  const status = error.status || 500;
  const errorMessage = getErrorMessage(error);

  res.status(status).render("404", { error: errorMessage });
}
