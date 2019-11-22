import React, {Component} from 'react'
import ChatSidebar from "./ChatSidebar/ChatSidebar";

import './chat.scss'
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSendMessage from "./ChatSendMessage";

import {ChatProvider} from "../../utils/chatContext";

class Chat extends Component{
    state = {
        user: {}
    };

    componentDidMount() {
        this.props.userme()
            .then((data) => {
               this.setState({user: data})
            })

        this.props.getChatItem()
    }

    render(){

        return(
            <ChatProvider value={[this.props, this.state]}>
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