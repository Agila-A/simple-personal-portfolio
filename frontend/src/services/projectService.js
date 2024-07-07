import axios from 'axios';

const API_URL = 'http://localhost:5000/projects';

const getProjects = () => {
    return axios.get(API_URL);
};

const addProject = (project) => {
    return axios.post(`${API_URL}/add`, project);
};

export { getProjects, addProject };
