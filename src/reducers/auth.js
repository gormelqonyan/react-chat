import * as types from '../constants/auth'


const token = localStorage.getItem('token');

const initialState = {
    user: null,
    token: token,
    isAuthenticated: !!token
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.REGISTRATION_SUCCESS:
            return{
                ...state,
                user: action.payload.user,
                isAuthenticated: true,
                token: action.payload.token
            };

        case types.SETUSERME_SUCCESS:
            return {
                ...state,
                user: action.payload
            };

        case types.SETUSERME_FAILD:
            return {
                ...state,
                user: null
            };

        case types.LOGIN_FAILD:
        case types.REGISTRATION_FAILD:
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                token: ''
            };

        default: return state
    }
}