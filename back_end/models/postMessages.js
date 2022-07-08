import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema into model => can run find, update, or delete... later
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
