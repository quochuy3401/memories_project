import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post, creator: req.userId });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not found any post matching this id");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  return res.status(200).json(updatedPost);
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not found any post matching this id");
  }
  const selectedPost = await PostMessage.findById(_id);
  const index = selectedPost.likes.findIndex((id) => id === req.userId);
  if (index === -1) {
    // not like yet
    selectedPost.likes.push(req.userId);
  } else {
    selectedPost.likes = selectedPost.likes.filter(
      (id) => id !== String(req.userId)
    );
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, selectedPost, {
    new: true,
  });
  return res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Not found any post matching this id");
  }
  await PostMessage.findByIdAndRemove(_id);
  return res.status(200).send({ message: "Delete post successfully" });
};

// const isLiked = async (post,userId) => {
//   const index = selectedPost.likes.findIndex((id) => id === req.userId);
//   let isLiked;
//   if (index === -1) {
//     // not like yet
//     selectedPost.likes.push(req.userId);
//     isLiked = true;
//   } else {
//     selectedPost.likes = selectedPost.likes.filter(
//       (id) => id !== String(req.userId)
//     );
//     isLiked = false;
//   }
// };
