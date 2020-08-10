import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import '../index.scss';
import { ICON_LIVE_STATUS } from '../../../icon2base64';

const statusDesc = {0: "未开始", 1: "直播中", 2: "已结束", 3: "已过期"};

const LiveStatus = ({ status }) => {
  return (
    <View className='live-status'>
      <Image src={ICON_LIVE_STATUS[status]} className='icon' />
      <Text>{statusDesc[status]}</Text>
    </View>
  );
};

LiveStatus.propTypes = {
  status: PropTypes.number,
};
LiveStatus.defaultProps = {
  status: 0,
};

export default LiveStatus;