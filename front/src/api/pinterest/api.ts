import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images',
});

export const getCats = async (n: number) => {
    const responce = httpClient.get(`/search?limit=${n}`,{
        headers: { 
          'x-apikey':'live_Q4CYbPuVURzPukSNBYLYCHJilEKVmz8HbHV5KGm1jjfBci8iARMa72csWd2sm7Q4',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET',
      },});
    return responce;
}

export const getPhoto = async (id: string) => {
    const responce = httpClient.get(`/${id}`,{
        headers: { 
        'x-apikey':'live_Q4CYbPuVURzPukSNBYLYCHJilEKVmz8HbHV5KGm1jjfBci8iARMa72csWd2sm7Q4',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET',
      },});
    return responce;
}