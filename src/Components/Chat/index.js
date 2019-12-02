import React, {Component} from 'react'
import ChatSidebar from "./ChatSidebar/ChatSidebar";

import './chat.scss'
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSendMessage from "./ChatSendMessage";

import {ChatProvider} from "../../utils/chatContext";

class Chat extends Component{

    componentDidMount() {
        const {fetchAllChat, fetchMyChat, getChatItem} = this.props;
        Promise.all([
            fetchAllChat(),
            fetchMyChat(),
        ])

    }

    render(){
        return(
            <ChatProvider value={[this.props]}>
                <div className="chat">
                    <ChatSidebar/>
                    <div className="chat-content">
                        <ChatHeader/>
                        <ChatMessages/>
                        <ChatSendMessage/>
                    </div>
                </div>
            </ChatProvider>
        )
    }
};

export default Chat
