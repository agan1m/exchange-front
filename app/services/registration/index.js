import { request } from '../../utils/request';
import URL from './constants';

export default class ApiService {
  static registration = form => {
    const options = {
      method: 'POST',
      body: {
        ...form,
      },
    };
    return request(URL.REGISTRATION, options);
  };
}
