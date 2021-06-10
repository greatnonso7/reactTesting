import axios from 'axios';
import {API} from '../src/utils/api';

jest.mock('axios');

test('fetches data successfully from an api', async () => {
  axios.get.mockResolvedValue(url => {
    if (url === API) {
      Promise.resolve({
        status: 200,
        data: {},
      });
    }
  });
});
