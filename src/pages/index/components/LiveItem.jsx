import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image } from '@tarojs/components';
import LiveStatus from './LiveStatus';
import LivePushers from './LivePushers';
import '../index.scss';

const LiveItem = ({ data }) => {
	const bgImg = {
		backgroundImage:`url(${data.backgroundPicUri})`,
	};
  return (
    <View onClick={()=> Taro.navigateTo({url:`/pages/room/index?roomId=${data.liveRoomId}`})} className='live-item' style={data.backgroundPicUri && bgImg}>
      <LiveStatus status={data.status} />
      <LivePushers pushers={data.pushers} title={data.title} poiName={data.poiName} liveData={data.liveData} />      	
    </View>
  );
};

LiveItem.propTypes = {
  data: PropTypes.object,
};
LiveItem.defaultProps = {
  data: {},
};

export default LiveItem;