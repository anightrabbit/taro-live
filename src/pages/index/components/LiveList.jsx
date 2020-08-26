import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import LiveListEmpty from './LiveListEmpty';
import LiveItem  from './LiveItem';
import ListBottom  from '../../../components/ListBottom';
import '../index.scss';

const LiveList = ({ data }) => {
  if(!data.length) return <LiveListEmpty />
  return (
    <View className='live-list'>
      {
        data.map(item => <LiveItem key={item.liveRoomId} data={item} />)
      }
      <ListBottom />
    </View>
  );
};

LiveList.propTypes = {
  data: PropTypes.array,
};
LiveList.defaultProps = {
  data: [],
};

export default LiveList;