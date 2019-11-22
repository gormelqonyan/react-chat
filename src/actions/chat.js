import {service} from '../service'

import * as types from '../constants/chat'
import {redirect} from "./services";

export const getChatItem = () => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.getApi('/chats', token)
            .then((data) => {
                dispatch({
                    type: types.GET_CHATITEM_SUCCESS,
                    payload: data,
                });

                return data
            })

            .catch((err) => {
                dispatch({
                    type: types.GET_CHATITEM_FAILD,
                    payload: err,
                });
            })
    }
};