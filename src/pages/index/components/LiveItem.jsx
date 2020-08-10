import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image } from '@tarojs/components';
import '../index.scss';

const LiveItem = ({ data }) => {
	const bgImg = {
		backgroundImage:`url(${data.backgroundPicUri})`,
	};
  return (
    <View className='live-item' style={bgImg}>
      
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