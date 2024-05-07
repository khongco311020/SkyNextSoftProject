import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Blog } from "./models/blogModel.js";
import blogsRoute from "./routes/blogsRoute.js";
import contactRoute from "./routes/contactRoute.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(function(req, res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials',true);
  next();
})

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
