import { request, multipartRequest } from '../../utils/request';
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

  static uploadImage = file => {
    const formData = new FormData();
    formData.append('file', file);
    const options = {
      method: 'POST',
      body: formData,
    };
    return multipartRequest(URL.UPLOAD_IMAGE, options);
  };
}
