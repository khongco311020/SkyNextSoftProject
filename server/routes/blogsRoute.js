import express from "express";
import { Blog } from "../models/blogModel.js";

const router = express.Router();

// Route for save a new Blog
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.content ||
      !request.body.image ||
      !request.body.highlight
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, content, image , highlight",
      });
    }
    const newBlog = {
      title: request.body.title,
      highlight: request.body.highlight,
      content: request.body.content,
      image: request.body.image,
    };

    const blog = await Blog.create(newBlog);
    return response.status(201).send(blog);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Blogs from database
router.get("/", async (request, response) => {
  try {
    const blogs = await Blog.find({});

    return response.status(200).json({
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Blog from database
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const blog = await Blog.findById(id);

    return response.status(200).json(blog);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update One Blog from database
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.content ||
      !request.body.image ||
      !request.body.highlight
    ) {
      return response.status(400).send({
        message: "send all request fields: title, content, image",
      });
    }

    const { id } = request.params;

    const result = await Blog.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Blog not found" });
    }

    return response.status(200).send({ message: "Blog update successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Router for Delete a blog
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Blog.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Blog not found" });
    }
    return response.status(200).send({ message: "Blog delete successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
