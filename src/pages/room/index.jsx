import Taro, { useRouter } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';
import useRoomInfo from '../../hooks/useRoomInfo';
import './index.scss';


const Page = () => {
  const { params } = useRouter();
  const { roomId } = params;
  const roomInfo = useRoomInfo(roomId);
  console.log(roomInfo, 'roomInfo');
  return (
    <View className='page-room'>
      
    </View>
  );
};

Page.config = {
  navigationBarTitleText: '直播房间',
};

export default Page;


