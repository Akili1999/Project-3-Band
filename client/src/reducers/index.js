import { combineReducers } from 'redux';

import forumReducer from './forumReducer';

import errorReducer from './errorReducer';

import authReducer from './authReducer';

export default combineReducers({
    forum: forumReducer,
    error: errorReducer,
    auth: authReducer
})