import {service} from "../service";

import * as types from "../constants/chat";
import {redirect} from "./services";

export const fetchAllChat = () => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.getApi("/chats", token)
            .then((data) => {
                dispatch({
                    type: types.FETCH_ALL_CHAT_SUCCESS,
                    payload: data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.FETCH_ALL_CHAT_FAILD,
                    payload: err,
                })
            })
    }
};

export const fetchMyChat = () => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.getApi("/chats/my", token)
            .then((data) => {
                dispatch({
                    type: types.FETCH_MY_CHAT_SUCCESS,
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: types.FETCH_MY_CHAT_SUCCESS,
                    payload: err
                })
            })
    }
};

export const setNewChat = (title) => {
    return (dispatch, getState) => {
        const {token} = getState().auth;


        return service.postApi("/chats", token, {data: {title}})
            .then((json) => {

                dispatch({
                    type: types.CREATE_CHAT_SUCCESS,
                    payload: json
                });

                dispatch(redirect(`/chat/${json.chat._id}`));

                return json
            })

            .catch((err) => {
                dispatch({
                    type: types.CREATE_CHAT_FAILD,
                    payload: err
                })
            })
    }
};

export const deleteChat = (chatId) => {
    return (dispatch, getState) => {
        const {token} = getState().auth;
        service.deletApi(`/chats/${chatId}`, token)
            .then((data) => {
                dispatch({
                    type: types.DELTE_CHAT_SUCCESS,
                     payload: data
                });

                dispatch(redirect("/chat"))
            })
            .catch((err) => {
                dispatch({
                    type: types.DELTE_CHAT_FAILD,
                    payload: err
                });
            })
    }
};


export const setActiveChat = (chatId) => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.getApi(`/chats/${chatId}`, token)
            .then((json) => {
                dispatch({
                    type: types.GET_CHAT_MESSAGES_SUCCESS,
                    payload: json.chat.messages
                });

                dispatch({
                    type: types.SET_ACTIVE_CHAT,
                    payload: json
                });

                return json
            })
            .catch((err) => {
                dispatch({
                    type: types.GET_CHAT_MESSAGES_FAILD,
                    payload: err
                });

                dispatch({
                    type: types.UNSET_ACTIVE_CHAT,
                });
            })
    }
};

export const joinChat = (chatId) => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        console.log("join chat chatId", chatId)

        return service.getApi(`/chats/${chatId}/join`, token)
            .then(({chat}) => {
                console.log("join chat action", chat)
                dispatch({
                    type: types.JOIN_CHAT_SUCCESS,
                    payload: chat
                });

                dispatch(redirect(`/chat/${chat._id}`));

                return chat;
            })
            .catch((err) => {
                console.log(err)
                console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror")
                dispatch({
                    type: types.JOIN_CHAT_FAILD,
                    payload: err
                })
            })

    }
}

export const sendMessage = (chatId, content) => {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        return service.postApi(`/chats/${chatId}`, token, {
            data: {content, statusMessage: false}
        })
            .then((data) => {
                console.log(data);
                dispatch({
                    type: types.SEND_MESSAGES_SUCCESS,
                    payload: data
                });

                throw new Error("Please write message")

            })
            .catch((err) => {
                dispatch({
                    type: types.SEND_MESSAGES_FAILD,
                    payload: err
                })
            })
    }
};

