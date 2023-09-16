import {combineReducers} from 'redux';
import userReucer from './UserReducer';
import shoppingReducer from './ShoppingReducer';

const rootReducer = combineReducers({
  UserReducer: userReucer,
  ShoppingReducer: shoppingReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
