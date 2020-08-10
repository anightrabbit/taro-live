import Taro, { useState, useEffect } from '@tarojs/taro';
import postLiveList from '../request/postLiveList';

const useLiveList = (cnt, index) => {
  const [payload, setPayload] = useState({ data: false, loading: false, error: false });
  useEffect(()=>{
    const getLiveList = async () => {
      try {
        setPayload({ data: false, loading: true, error: false });
        const res = await postLiveList({ cnt, index });
        setPayload({ data: res, loading: false, error: false });
      } catch (err) {
        setPayload({ data: false, loading: false, error: err.message || '获取直播列表数据失败' });
      }
    };
    if (cnt !== undefined && index !== undefined) getLiveList();
  },[cnt, index]);
  
  return [payload];
};

export default useLiveList;