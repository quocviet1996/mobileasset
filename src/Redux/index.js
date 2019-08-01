import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {  persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['SignInReducer']
};
// const reducers = persistReducer(rootPersistConfig, reducer)
// const persistedReducer = persistReducer(persistConfig, reducers)
export default configureStore = createStore(reducer, applyMiddleware(thunk));
// export default configureStore = createStore(reducer, applyMiddleware(thunk));

