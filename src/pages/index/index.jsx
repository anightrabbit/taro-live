import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import LiveList from './components/LiveList';
import useLiveList from '../../hooks/useLiveList';
import Loading from '../../components/Loading';
import LoadingError from '../../components/LoadingError';
import './index.scss';


const Page = () => {
  const [payload] = useLiveList(0,0);
  return (
    <View className='page-live'>
      {
        payload.loading
        ? <Loading />
        : payload.data
        ? <LiveList data={payload.data} />
        : <LoadingError />
      }
    </View>
  );
};

Page.config = {
  navigationBarTitleText: '直播大厅',
  enablePullDownRefresh: true,
  backgroundTextStyle: 'dark',
};

export default Page;


