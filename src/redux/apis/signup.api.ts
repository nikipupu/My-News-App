import api from "../../api";

export const signup = (data: { email: string; password: string }) => api.post('/auth/signup', data);
