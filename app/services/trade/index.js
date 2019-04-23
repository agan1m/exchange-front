import { request } from '../../utils/request';
import URL from './constants';

export default class ApiService {
  static getTradeList = () => {
    const options = {
      method: 'GET',
    };
    return request(URL.GET_TRADE_LIST, options);
  };

  static tradeBuy = payload => {
    const options = {
      method: 'POST',
      body: { ...payload },
    };
    return request(URL.TRADE_BUY, options);
  };

  static tradeSell = payload => {
    const options = {
      method: 'POST',
      body: { ...payload },
    };
    return request(URL.TRADE_SELL, options);
  };
}
