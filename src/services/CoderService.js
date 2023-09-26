import axios from 'axios'

const CODER_BASE_REST_API_URL = 'http://localhost:8080/api/';

export const listcoders = () => {
    return axios.get('http://localhost:8080/api/getcoders')
};

export const createcoder = (coder) => {
    return axios.post('http://localhost:8080/api/addcoder', coder)
}

export const getcoderById = (cid) => {
    return axios.get('http://localhost:8080/api/getcoder/' + cid);
}

export const updatecoder = (coder) => {
    return axios.put('http://localhost:8080/api/updatecoder' ,coder);
}

export const deletecoder = (cid) => {
    return axios.delete('http://localhost:8080/api/deletecoderbyId/' + cid);
}