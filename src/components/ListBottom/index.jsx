import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import './index.scss';

const LiveBottom = ({ text, icon }) => {
  return (
    <View className='list-bottom'>
      <View className='line1px' />
      {
        icon && <Image src={icon} className='icon' />
      }
      <Text className='text'>{text}</Text>
      <View className='line1px' />
    </View>
  );
};

LiveBottom.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
};
LiveBottom.defaultProps = {
  text: '我是底线',
  icon: '',
};

export default LiveBottom;