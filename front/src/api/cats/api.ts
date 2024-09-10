import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const createLike = async (id: string) => {
    const responce = httpClient.post(`/Cats/${id}`);
    return responce;
}

export const deleteLike = async (id: string) => {
    const responce = httpClient.delete(`/Cats/${id}`);
    return responce;
}

export const getLikes = async () => {
    const responce = httpClient.get(`/Cats`);
    return responce;
}