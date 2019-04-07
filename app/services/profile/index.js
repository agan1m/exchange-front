import { request } from '../../utils/request';
import URL from './constants';

export default class ApiService {
  static changeInfo = form => {
    const options = {
      method: 'POST',
      body: {
        ...form,
      },
    };
    return request(URL.CAHNGE_INFO, options);
  };
}
