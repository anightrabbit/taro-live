import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';

import './index.scss';

const Loading = ({text}) => {
  return (
    <View className='loading-container'>
      <View className='loading-container-inner'>
      	<Text>{text}</Text>
      </View>
    </View>
  );
};

Loading.propTypes = {
	text: PropTypes.string,
};
Loading.defaultProps = {
	text: '加载中...',
};

export default Loading;
