import { combineReducers } from 'redux';
import SignInReducer from './User/reducer';
import assetReducer from './Asset/reducer';
import checkAssetReducer from './CheckAsset/reducer';

// import RoomReducer  from './ChatRoom/reducer';

const reducer = combineReducers({
    SignInReducer,
    assetReducer,
    checkAssetReducer,
    // RoomReducer
})
export default reducer;

