import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import rootSaga from "./redux/sagas";
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import allReducers from "./redux/reducers";
import {applyMiddleware, createStore} from 'redux';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme}/>
          <StatusBar/>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);
