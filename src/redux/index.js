import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';

import reducers from './reducers';

const middles = [Thunk];
if (__DEV__) {
  middles.push(logger);
}

export default compose(applyMiddleware(...middles))(createStore)(reducers);
