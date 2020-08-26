import Taro, { useEffect, useState } from '@tarojs/taro';
import postRoomInfo from '../request/postRoomInfo';
import { TEST_TOKEN, TEST_USERID } from '../config';
const useRoomInfo = (roomId, liveUser = {token: TEST_TOKEN, userid: TEST_USERID}) => {
  const [payload, setPayload] = useState({ data: false, loading: false, error: false });
  useEffect(() => {
    const handleRequest = async () => {
      try {
        setPayload({ data: false, loading: true, error: false });
        const params = {
          liveRoomId: roomId,
          token: liveUser.token,
          userid: liveUser.userId,
          timeOut: '5',
        };
        const res = await postRoomInfo(params);
        setPayload({ data: res, loading: false, error: false });
      } catch (err) {
        setPayload({ data: false, loading: false, error: '获取直播间信息失败' });
      }
    };
    handleRequest();
  }, [roomId, liveUser]);

  return payload;
};

export default useRoomInfo;