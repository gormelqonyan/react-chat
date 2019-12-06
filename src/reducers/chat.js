import * as types from '../constants/chat';
import {combineReducers} from "redux";

const initialState2 = {
    activeId: "",
    allIds: [],
    myIds: [],
    byIds: [],
    messages: [],
};

const activeId = (state = initialState2.activeId, action) => {
    console.log("activeId action type", action.type)
    switch (action.type) {
        case types.SET_ACTIVE_CHAT:
        case types.JOIN_CHAT_SUCCESS:
            console.log("activeId");
            return getIds(action.payload.chat);
        case types.JOIN_CHAT_FAILD:
            return "";
        default: return state
    }
};
const allIds = (state = initialState2.allIds, action) => {
    switch (action.type) {
        case types.FETCH_ALL_CHAT_SUCCESS:
            return action.payload.chats.map(getIds);
        case types.CREATE_CHAT_SUCCESS:
            return [...state, action.payload.chat._id];
        case types.DELTE_CHAT_SUCCESS:
            return [...state.filter((id) => {
                return id !== action.payload.chat._id
            })];
        default: return state
    }
};
const myIds = (state = initialState2.myIds, action) => {
    console.log("myIds action type", action.type)
    switch (action.type) {
        case types.FETCH_MY_CHAT_SUCCESS:
            return action.payload.chats.map(getIds);
        case types.CREATE_CHAT_SUCCESS:
        case types.JOIN_CHAT_SUCCESS:
            console.log("myIDs");
            return [...state, action.payload.chat._id];
        case types.DELTE_CHAT_SUCCESS:
            return [...state.filter((id) => {
                return id !== action.payload.chat._id
            })];
        default: return state
    }
};
const byIds = (state = initialState2.byIds, action) => {
    console.log("byIds action type", action.type)
    switch (action.type) {
        case types.FETCH_ALL_CHAT_SUCCESS:
        case types.FETCH_MY_CHAT_SUCCESS:
            return {
                ...state,
                ...action.payload.chats.reduce((ids, chat) => {
                    return{
                        ...ids,
                        [chat._id]: chat,
                    }
                }, {})
            };
        case types.JOIN_CHAT_SUCCESS:
        case types.CREATE_CHAT_SUCCESS:
            console.log("aaaaaaaaaaaaaaaaaaaaaaa");
            return {
                ...state,
                [action.payload.chat._id]: action.payload.chat
            };

        case types.DELTE_CHAT_SUCCESS:
            const newState = {...state};
            delete newState[getIds(action.payload.chat)];
            return newState;

        default: return state
    }
};

const messages = (state = initialState2.messages, action) => {
    switch (action.type) {
        case types.GET_CHAT_MESSAGES_SUCCESS:
            return  action.payload;

        case types.SEND_MESSAGES_SUCCESS:
            return [...state, action.payload.message];

        case types.GET_CHAT_MESSAGES_FAILD:
            return [];

        default: return state
    }
}

export const getIds = (chat) => chat._id;
export const getById = (chat, id) => chat[id];
export const getByIds = (state, chats) => chats.map((chat) => state.byIds[chat]);

export default combineReducers({
    activeId,
    allIds,
    myIds,
    byIds,
    messages
})

const initialState = {
    chatItem: [],
    messages: [],
};

export const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CHATITEM_SUCCESS:
            return {
                ...state,
                chatItem: action.payload.chats
            };

        case types.CREATE_CHAT_SUCCESS:
            return {
                ...state,
                chatItem: [...state.chatItem, action.payload.chat]
            };

        case types.GET_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload
            };

        case types.SEND_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: [...state.messages, action.payload.message]
            };

        case types.GET_CHAT_MESSAGES_FAILD:
            return {
                ...state,
                messages: []
            };

        case types.DELTE_CHAT_SUCCESS:
            return {
                ...state,
                chatItem: state.chatItem.filter((item) => {
                    return item._id !== action.payload.chat._id
                })
            }

        default: return state

    }
};