
import axios from 'axios';
import {listcoders} from '../services/CoderService'

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
