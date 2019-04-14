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

  static login = form => {
    const options = {
      method: 'POST',
      body: {
        ...form,
      },
    };
    return request(URL.LOGIN, options);
  };

  static logout = () => {
    const options = {
      method: 'POST',
    };
    return request(URL.LOGOUT, options);
  };
}
