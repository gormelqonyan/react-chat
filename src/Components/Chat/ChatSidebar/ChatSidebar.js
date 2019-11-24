import React, {Component} from 'react'

import './chatSidebar.scss'
import ChatItem from "./ChatItem";
import {chathoc} from "../../../HOC/chathoc";

import {CSSTransition} from 'react-transition-group'

import {CreateChatPopup} from './CreateChatPopup'

class ChatSidebar extends Component{

    state = {
        createChatPopupShow: false,
    }

    handleCreateChat = () => {
        this.setState(({createChatPopupShow}) => {
           return {
               createChatPopupShow: !createChatPopupShow
           }
        })
    }

    render(){
        const {chats} = this.props.value[0];
        const {createChatPopupShow} = this.state;
        return(
            <>
                <CSSTransition
                    in={createChatPopupShow}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                >
                    <CreateChatPopup onClose = {() => this.handleCreateChat()}/>

                </CSSTransition>
                <div className="chat-sidebar">
                    <div className="chat-sidebar-search">
                        <input
                            type="text"
                            className="chat-sidebar-search-input"
                            placeholder="Search chat..."
                        />
                    </div>
                    <button
                        className="add-chat-item"
                        onClick={this.handleCreateChat}
                    >Create chat</button>
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
            </>
        )
    }
}

export default chathoc(ChatSidebar)
