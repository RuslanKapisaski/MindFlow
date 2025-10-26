import express, { urlencoded } from "express";

import routes from "./routes.js";
const app = express();
app.set("views", "src/views");
app.use(express.urlencoded({ extended: true }));
