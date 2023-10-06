import axios from 'axios';
import {listcoders,createcoder,updatecoder,deletecoder} from '../services/CoderService'

jest.mock('axios');
describe('listcoders', () => {
  it('fetches successfully data from an API', async () => {
    const data = { response: 'data' };
    axios.get.mockResolvedValue(data);

    await expect(listcoders()).resolves.toEqual(data);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Request failed with status code 500';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(listcoders()).rejects.toThrow(errorMessage);
  });
});
describe('createcoder', () => {
  it('posts data successfully to an API', async () => {
    const data = { response: 'data' };
    axios.post.mockResolvedValue(data);
    await expect(createcoder(data)).resolves.toEqual(data);
  });

  it('posts data erroneously to an API', async () => {
    const errorMessage = 'Request failed with status code 500';
    axios.post.mockRejectedValue(new Error(errorMessage));
    await expect(createcoder({})).rejects.toThrow(errorMessage);
  });
});

describe('updatecoder', () => {
  it('puts data successfully to an API', async () => {
    const data = { response: 'data' };
    axios.put.mockResolvedValue(data);
    await expect(updatecoder(data)).resolves.toEqual(data);
  });

  it('puts data erroneously to an API', async () => {
    const errorMessage = 'Request failed with status code 500';
    axios.put.mockRejectedValue(new Error(errorMessage));

    await expect(updatecoder({})).rejects.toThrow(errorMessage);
  });
});

describe('deleteData', () => {
  it('deletes data successfully from an API', async () => {
    const data = { response: 'data' };
    axios.delete.mockResolvedValue(data);

    await expect(deletecoder()).resolves.toEqual(data);
  });

  it('deletes data erroneously from an API', async () => {
    const errorMessage = 'Request failed with status code 500';
    axios.delete.mockRejectedValue(new Error(errorMessage));

    await expect(deletecoder()).rejects.toThrow(errorMessage);
  });
});