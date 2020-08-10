import Taro from '@tarojs/taro';
import http from '../utils/http';
import { PATH_LIVE_PLAY_LIST } from '../constants';

const postLiveList = params => (
  http.post(PATH_LIVE_PLAY_LIST, params)
  .then((res) => {
  	if (!res || !res.data || !res.data.list) return [];
    return res.data.list;
  })
  .catch(() => {
  	debugger;
    throw new Error('获取直播大厅列表失败');
  })
);

export default postLiveList;
