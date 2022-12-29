import {applyMiddleware, combineReducers, createStore} from 'redux';
import AuthReducer from './reducer';
import thunk from 'redux-thunk';

const RootReducers = combineReducers({
  AuthReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
