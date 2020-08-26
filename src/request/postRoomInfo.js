import Taro from '@tarojs/taro';
import http from '../utils/http';
import { PATH_LIVE_PLAY_LIST, PLAY_DOMAIN_APP, PLAY_DOMAIN_MP } from '../constants';

const postRoomInfo = params => (
  http.post(PATH_LIVE_ROOM_INFO, params)
  .then((res) => {
  	if (!res || !res.data || !res.data.roomInfo) throw new Error();
    return formatData(res.data);
  })
  .catch(() => {
    throw new Error('获取直播房间信息失败');
  })
);

const formatData = ({ roomInfo, lottery }) => {
  return {
    playUrl: (roomInfo.mixedPlayURL || '').replace(PLAY_DOMAIN_APP, PLAY_DOMAIN_MP),
    pusherName: roomInfo.pushers[0].userName|| '',
    pusherAvatar: roomInfo.pushers[0].userAvatar || '',
    view: (roomInfo.liveData.virtualPopularity || 0) + (roomInfo.liveData.timesWatched || 0),
    like: roomInfo.liveData.followNum || 0,
    online: roomInfo.liveData.onlineNum || 0,
    bgImg: roomInfo.backgroundPicUri || '',
    coverImg: roomInfo.coverPicUri || '',
    status: roomInfo.status || '',
    title: roomInfo.title || '',
    countdown: roomInfo.countdownMillsenconds ||'',
    enableComment:roomInfo.enableComment ||false,
    enableLike: roomInfo.enableLike ||false,
    enableShop: roomInfo.enableShop ||false,
    enableDynamicPopularity: roomInfo.enableDynamicPopularity ||false,
    lottery,
  }; 
};

export default postRoomInfo;
