import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

// default headers
API.interceptors.request.use((req)=> {
    if(localStorage.getItem("profile")){
        const token = JSON.parse(localStorage.getItem('profile')).token;
    req.headers.Authorization = `Bear ${token}`
    }
    return req;
})
export const fetchPosts = () => API.get("/posts");
export const createPost = (postData) => API.post("/posts", postData);
export const updatePost = (id, postData) => API.patch(`posts/${id}`, postData);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);
export const deletePost = (id) => API.delete(`posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
