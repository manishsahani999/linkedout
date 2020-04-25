import { api } from "api";
import { handle } from "api";


const login = data => api.post('/users/login', data).then(handle);

const me = () => api.get('/users/me').then(handle);

const logout = () => { localStorage.removeItem('token'); localStorage.removeItem('isEmployer'); }


export const userService = {
    login, logout, me
}


