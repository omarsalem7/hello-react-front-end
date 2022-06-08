import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messagesReducer from './messages/messages';

const reducer = combineReducers({
  messagesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
