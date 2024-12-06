import mongoose from "mongoose";
import User from "./user.model.js";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  },
  context: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000,
    minlength: 50,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
