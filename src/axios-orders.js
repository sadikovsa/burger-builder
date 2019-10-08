import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-8ed5c.firebaseio.com/'
});

export default instance;