import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Chat from '../Components/Chat/index'
import {logout, userme} from "../actions/auth";
import {getByIds, getById} from '../reducers/chat'
import {
    setNewChat,
    setActiveChat,
    sendMessage,
    deleteChat,
    fetchAllChat,
    fetchMyChat
} from "../actions/chat";

import {isMember, isCreator, isChatMember} from '../reducers'

const mapStatToProps = state => {
    const activeChat = getById(state.chats, state.chats.activeId );
    return {
        chats2: {
            all: getByIds(state.chats, state.chats.allIds),
            my: getByIds(state.chats, state.chats.myIds),
        },
        activeUser: {
            ...state.auth.user,
            isMember: isMember(state, activeChat),
            isCreator: isCreator(state, activeChat),
            isChatMember: isChatMember(state, activeChat),
        },
        user: state.auth.user,
        messages: state.chats.messages
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    userme,
    setNewChat,
    setActiveChat,
    sendMessage,
    deleteChat,
    fetchAllChat,
    fetchMyChat
}, dispatch);

export default connect(
    mapStatToProps,
    mapDispatchToProps
)(Chat)