import api from "../../api";

export const fetchPostById = (id: string) => api.get(`/posts/${id}`)