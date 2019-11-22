import {service} from '../service'

import * as types from '../constants/auth'
import {redirect} from "./services";


export const login = (username, password) => {
    return dispatch => {
        service.postApi('/login', '', {
            username,
            password
        })
            .then((data) => {
                localStorage.setItem('token', data.token);
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: data
                });

                dispatch(redirect('/chat'))

            })
            .catch((err) => {
                dispatch({
                    type: types.LOGIN_FAILD,
                    payload: err
                })
            })
    }
};

export const register = (username, password) => {
    return dispatch => {

        service.postApi('/signup', '', {
            username,
            password
        })
            .then((data) => {
                localStorage.setItem('token', data.token);
                dispatch({
                    type: types.REGISTRATION_SUCCESS,
                    payload: data
                });

                dispatch(redirect('/chat'))
            })
            .catch((err) => {
                dispatch({
                    type: types.REGISTRATION_FAILD,
                    payload: err
                })
            })
    }
};

export const logout = () => {
    return (dispatch) => {

        service.getApi('/logout', '')
            .then((data) => {
                localStorage.removeItem('token');

                dispatch({
                    type: types.LOGOUT_SUCCESS,
                    payload: data
                });

                dispatch(redirect('/login'))

                return data
            })
            .catch((err) => {
                dispatch({
                    type: types.LOGOUT_FAILD,
                    payload: err
                })
            })
    }
};

export const userme = () => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.getApi('/users/me/', token)
            .then((json) => {
                dispatch({
                    type: types.SETUSERME_SUCCESS,
                    payload: json.data.user
                });
                return json.data.user
            })
            .catch((err) => {
                dispatch({
                    type: types.SETUSERME_FAILD,
                    payload: err
                });
            })
    }
};