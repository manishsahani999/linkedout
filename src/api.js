import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    // baseURL: 'https://api.tuesday.wtf/api',
})

let AUTH_TOKEN = localStorage.getItem('token');

if (AUTH_TOKEN) { instance.defaults.headers.common['Authorization'] = `${AUTH_TOKEN}`; }

export const handle = (res) => {
    if (res.status === 401) {
        localStorage.removeItem('token');

        const error = (res.data) || res.statusText;
        return Promise.reject(error);
    }

    return res.data;
}

export { instance as api };