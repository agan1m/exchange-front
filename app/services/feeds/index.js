import { request } from '../../utils/request';
import URL from './constants';

export default class ApiService {
  static getPosts = () => {
    const options = {
      method: 'GET',
    };
    return request(URL.GET_POSTS, options);
  };

  static createPost = form => {
    const options = {
      method: 'POST',
      body: { ...form },
    };
    return request(URL.CREATE_POST, options);
  };
}
