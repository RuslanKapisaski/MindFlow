import { Router } from "express";
const userController = Router();
userController.get("/register", isGuest, (req, res) => {
  res.render("users/register");
});
userController.post("/register", isGuest, async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  try {
      username,
      email,
      password,
      repeatPassword
    );

    res.redirect("/");
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    res.status(401).render("users/register", {
      error: errorMessage,
      users: { email, username },
    });
  }
});
