import { combineReducers } from 'redux';
import SignInReducer from './User/reducer';
import assetReducer from './Asset/reducer';
// import RoomReducer  from './ChatRoom/reducer';

const reducer = combineReducers({
    SignInReducer,
    assetReducer,
    // RoomReducer
})
export default reducer;

