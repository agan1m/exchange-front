import socketClient from 'socket.io-client';
import AppSettings from '../../appSettings';

export default class ApiService {
  static openSocket = () => socketClient(AppSettings.socketUrl);
}
