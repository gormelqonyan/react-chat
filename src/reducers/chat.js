import * as types from '../constants/chat'

const initialState = {
    chatItem: [],
};

export const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CHATITEM_SUCCESS:
            return {
                ...state,
                chatItem: action.payload.data.chats
            };

        default: return state

    }
}