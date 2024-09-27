import api from "../../api";

export const fetchPosts = () => api.get('/posts');