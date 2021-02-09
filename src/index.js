import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from './redux';

const persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          console.warn(store);
        }}
        loading={() => <Text>loading</Text>}
      >
        <Text style={{ marginTop: 100 }}>hi</Text>
      </PersistGate>
    </Provider>
  );
};

export default App;
