import { combineReducers } from 'redux';
import SignInReducer from './User/reducer';
import assetReducer from './Asset/reducer';
import checkAssetReducer from './CheckAsset/reducer';
import checkScannedReducer from './CheckScanned/reducer';

// import RoomReducer  from './ChatRoom/reducer';

const reducer = combineReducers({
    SignInReducer,
    assetReducer,
    checkAssetReducer,
    checkScannedReducer,
    // RoomReducer
})
export default reducer;

