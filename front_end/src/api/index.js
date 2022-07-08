import axios from "axios";

const url = `http://localhost:5000/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (postData) => axios.post(url, postData);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData)