import express, { urlencoded } from "express";
import handlebars from "express-handlebars";

import routes from "./routes.js";
const app = express();
//config handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
      ...pageHelpers,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");
//static middleware
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
