import axios from 'axios';

import { GET_FORUMS, ADD_FORUM, DELETE_FORUM, FORUMS_LOADING } from './types';

import { tokenConfig } from './authActions';

import { returnErrors } from './errorActions';

export const getForums = () => dispatch => {
    dispatch(setForumsLoading());
    axios.get('/api/forums').then(res =>
        dispatch({
            type: GET_FORUMS,
            payload: res.data
        })).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addForum = forum => (dispatch, getState) => {
    axios.post('/api/forums', forum, tokenConfig(getState))
    .then(res =>
        dispatch({
            type: ADD_FORUM,
            payload: res.data
        })).catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setForumsLoading = () => {
    return {
        type: FORUMS_LOADING
    };
};