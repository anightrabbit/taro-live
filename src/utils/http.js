import Taro from '@tarojs/taro';
import { API_URL, TEST_TOKEN } from '../config';

const request = (method, path, data, customBaseURL, customConfig) => {
  const header = {
    'Authorization': `Bearer ${Taro.getStorageSync(TEST_TOKEN)}`,
  };

  return new Promise((resolve, reject) => Taro.request({
    method,
    url: `${customBaseURL || API_URL}${path}`,
    data: data,
    header,
    success(res) {
      const resData = res.data || {};
      // if (resData.hasError) {
      //   if (resData.responseCode === 401) {
      //     Taro.clearStorage().then(async () => {
      //       // await login();
      //     });

      //   }
      //   reject(new Error(resData.errorMessage));
      // }
      resolve(resData);
    },
    fail() {
      // 401 500 等状态码错误不走 fail 函数，依然走 success 函数
      reject(new Error('request fail'));
    },
    ...customConfig,
  }));
};

const http = {
  get(path, data, customBaseURL, customConfig) {
    return request('GET', path, data, customBaseURL, customConfig);
  },
  post(path, data, customBaseURL, customConfig) {
    return request('POST', path, data, customBaseURL, customConfig);
  },
  put(path, data, customBaseURL, customConfig) {
    return request('PUT', path, data, customBaseURL, customConfig);
  },
  delete(path, data, customBaseURL, customConfig) {
    return request('DELETE', path, data, customBaseURL, customConfig);
  },
};

export default http;
