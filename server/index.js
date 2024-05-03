import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Blog } from "./models/blogModel.js";
import blogsRoute from "./routes/blogsRoute.js";
import contactRoute from "./routes/contactRoute.js";
import cors from "cors";
const app = express();

//middleware for parsing raquest body
app.use(express.json());
app.use(cors());

app.get("/", (request, respone) => {
  console.log(request);
  return respone.status(234).send("welcome to Api SKYNEXTSOFT");
});

app.use("/blogs", blogsRoute);
app.use("/contact", contactRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("ok database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
