import {combineReducers} from 'redux'

import {auth} from './auth'
import chats from './chat'


export const rootReducer = combineReducers({
    auth,
    chats
});

export const getActiveUser = (state) => state.auth.user;
export const getUserId = (user) => user._id;

export const isCreator = (state, chat) => {

    try{
        return getUserId(chat.creator) === getUserId(getActiveUser(state))
    }
    catch (e) {
        return false;
    }
};

export const isMember = (state, chat) => {
    try {
        return chat.member.some((member) => {
           return getUserId(member) === getUserId(getActiveUser(state))
        })
    }
    catch (e){
        return false;
    }
};

export const isChatMember = (state, chat) => {
    return isCreator(state, chat) || isMember(state, chat)
};