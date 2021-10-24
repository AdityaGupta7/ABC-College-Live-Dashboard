import { createStore, combineReducers } from 'redux';
import cardReducer from './card/reducers';
import socketReducer from './socket/reducers';

const store = createStore(combineReducers({
    cardReducer,
    socketReducer
}));

export default store;