import React, {Component} from 'react'

import './chatSidebar.scss'
import ChatItem from "./ChatItem";
import {chathoc} from "../../../HOC/chathoc";

class ChatSidebar extends Component{


    render(){
        const {chats} = this.props.value[0];
        return(
            <div className="chat-sidebar">
                <div className="chat-sidebar-search">
                    <input
                        type="text"
                        className="chat-sidebar-search-input"
                        placeholder="Search chat..."
                    />
                </div>
                <ul className="chat-sidebar-items">
                    {
                        chats.map((chat) => (
                            <li
                                className="chat-sidebar-item"
                                key={chat._id}
                                onClick={() => {this.props.value[0].history.push(`/chat/${chat._id}`)}}
                            >
                                <ChatItem title={chat.title}/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

export default chathoc(ChatSidebar)