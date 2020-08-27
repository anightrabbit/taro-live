import Taro, { useState, useEffect } from '@tarojs/taro';
import http from '../utils/http.js';

const useData = (url, params, component) => {
  const [payload, setPayload] = useState({ data: false, loading: false, error: false });
  useEffect(()=>{
    const getData = async () => {
      try {
        setPayload({ data: false, loading: true, error: false });
        const res = await http.post(url, params);
        setPayload({ data: res, loading: false, error: false });
      } catch (err) {
        setPayload({ data: false, loading: false, error: err.message || '获取数据失败' });
      }
    };
    if (params) getData();
  },[params]);
  
  return <component {...payload} />;
};

export default useData;