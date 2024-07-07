import axios from 'axios';

const API_URL = 'http://localhost:5000/blogPosts';

const getBlogPosts = () => {
    return axios.get(API_URL);
};

const addBlogPost = (blogPost) => {
    return axios.post(`${API_URL}/add`, blogPost);
};

export { getBlogPosts, addBlogPost };
