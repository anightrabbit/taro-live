import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';

import './index.scss';

const LoadingError = ({text}) => {
  return (
    <View className='loading-error-container'>
      <Text>{text}</Text>
    </View>
  );
};

LoadingError.propTypes = {
	text: PropTypes.string,
};
LoadingError.defaultProps = {
	text: '加载失败',
};

export default LoadingError;
