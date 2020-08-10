import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image, Text } from '@tarojs/components';
import '../index.scss';

const LiveListEmpty = ({ text, icon }) => {
  return (
    <View className='live-list-empty'>
      <Image src={icon} />
      <Text>{text}</Text>
    </View>
  );
};

LiveListEmpty.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
LiveListEmpty.defaultProps = {
  text: '空空如也',
  icon: '',
};

export default LiveListEmpty;