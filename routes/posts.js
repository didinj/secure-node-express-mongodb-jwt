import express from "express";
import Post from "../models/Post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Create a new post
router.post("/", auth, async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all posts (for the authenticated user)
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id }).sort({
      createdAt: -1
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a post
router.put("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, user: req.user.id });
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a post
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
