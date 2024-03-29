import axios from 'axios';

const headers = { Authorization: 'Bearer my-token', appId: 'medigo', hospitalId: '79616' };
const url = 'https://api-medigo-development.mdsco.vn';

const instance = axios.create({
    method: "GET",
    baseURL: url,
    headers: headers,
});

export default instance;
