import 'whatwg-fetch';
import AppSettings from '../appSettings';
import auth from './auth';
import { checkStatus, formatQueryParams } from './request';
/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

/* eslint no-param-reassign: 0 */
export function download(url, options, baseUrl = AppSettings.webApiUrl) {
  const token = auth.getToken();

  options.credentials = 'include';
  options.headers = Object.assign(
    {
      'Content-Type': 'application/json',
      Token: `${token}`,
    },
    options.headers,
    {},
  );

  if (options && options.params) {
    const params = formatQueryParams(options.params);
    url = `${url}?${params}`;
  }

  // Stringify body object
  if (options && options.body) {
    options.body = JSON.stringify(options.body);
  }

  return fetch(baseUrl + url, options).then(checkStatus);
}

export function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export function downloadBytes(bytes, filename, type) {
  const decodedFilename = decodeURI(filename);

  if (typeof window.chrome !== 'undefined') {
    // Chrome version
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(bytes);
    link.download = decodedFilename;
    link.click();
  } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE version
    const blob = new Blob([bytes], { type });
    window.navigator.msSaveBlob(blob, decodedFilename);
  } else {
    // Firefox version
    const file = new File([bytes], decodedFilename, {
      type: 'application/force-download',
    });
    window.open(URL.createObjectURL(file));
  }
}
