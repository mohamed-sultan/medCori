import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import navigation from './navigation';

const config = {
  key: 'root',
  storage: AsyncStorage,

  blacklist: [],
};

export default persistCombineReducers(config, {
  navigation,
});
