import express, { urlencoded } from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routes from "./routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
const app = express();

//setup databse
try {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/",
    { dbName: "mind-blog" } //proj name}
  );
  console.log("Successfully connected to database!");
} catch (error) {
  console.error("Cannot connect to database: ", error.message);
}

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

//cookie parser middleware
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

//Auth middleware
app.use(authMiddleware);

app.use(routes);
app.listen(process.env.PORT, () =>
  console.log(
    `Server is listening on port http://localhost:${process.env.PORT}`
  )
);
