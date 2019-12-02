import React, {Component} from 'react'

import './chatSidebar.scss'
import ChatItem from "./ChatItem";
import {chathoc} from "../../../HOC/chathoc";

import {CSSTransition} from 'react-transition-group'

import CreateChatPopup from './CreateChatPopup'

class ChatSidebar extends Component{

    state = {
        createChatPopupShow: false,
        allChats: false,
    };

    handleCreateChat = () => {
        this.setState(({createChatPopupShow}) => {
           return {
               createChatPopupShow: !createChatPopupShow
           }
        })
    };

    handleShowChats = (chat) => {
        this.setState({
            allChats: chat
        })
    }

    render(){
        const {chats2} = this.props.value[0];
        const {createChatPopupShow, allChats} = this.state;
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
                    <div className="chat-sidebar-state-btn">
                        <button className={allChats ? "active": ""} onClick={() => this.handleShowChats(true)}>All</button>
                        <button className={allChats ? "" : "active"} onClick={() => this.handleShowChats(false)}>My</button>
                    </div>
                    <ul className="chat-sidebar-items">
                        {
                            allChats ?
                                    chats2.all.map((chat) => (
                                        <li
                                            className="chat-sidebar-item"
                                            key={chat._id}
                                            onClick={() => {this.props.value[0].history.push(`/chat/${chat._id}`)}}
                                        >
                                            <ChatItem title={chat.title}/>
                                        </li>
                                    ))

                                :

                                    chats2.my.map((chat) => (
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
