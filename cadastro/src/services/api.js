import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-cadastro-wmx0.onrender.com'
})

export default api