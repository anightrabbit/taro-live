import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image, Text } from '@tarojs/components';
import '../index.scss';
import {ICON_LIVE_POI, ICON_LIVE_INDEX} from '../../../icon2base64';

const LivePushers = ({ pushers, title, poiName, liveData }) => {
  const pusher = pushers[0];
  return (
    <View className='live-pushers'>
      <Image className='live-pusher-avatar' src={pusher.userAvatar} mode='aspectFill' />
      <View className='live-pusher-infor'>
        <Text className='live-pusher-name'>{pusher.userName}</Text>
        <Text className='live-pusher-title'>{title}</Text>
        <View className='live-pusher-index'>
          <Image src={ICON_LIVE_POI} className='icon' />
          <Text className='live-pusher-poi'>{poiName}</Text>
          <Image src={ICON_LIVE_INDEX} className='icon' />
          <Text>{liveData.timesWatched + liveData.virtualPopularity}</Text>
        </View>
      </View>
    </View>
  );
};

LivePushers.propTypes = {
  pushers: PropTypes.array,
  poiName: PropTypes.string,
  title: PropTypes.string,
  liveData: PropTypes.object,
};
LivePushers.defaultProps = {
  pushers: [],
  poiName: '',
  title: '',
  liveData: {},
};

export default LivePushers;