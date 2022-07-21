import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

// turn schema into model => can run find, update, or delete... later
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
