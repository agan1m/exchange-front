import { SOCKET_CONNECT, SOCKET_DISCONNECT, NEW_POST } from './constants';

export const socketConnect = () => ({
  type: SOCKET_CONNECT,
});

export const socketDisconnect = () => ({
  type: SOCKET_DISCONNECT,
});

export const newPost = payload => ({
  type: NEW_POST,
  payload,
});
