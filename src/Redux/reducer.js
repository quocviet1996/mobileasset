import { combineReducers } from 'redux';
import SignInReducer from './User/reducer';
// import RoomReducer  from './ChatRoom/reducer';

const reducer = combineReducers({
    SignInReducer,
    // RoomReducer
})
export default reducer;

