import React, {useState} from 'react'
import userIcon from '../../../assets/img/user.svg'
import logout from '../../../assets/img/logout.svg'
import menu from '../../../assets/img/menu.svg'


import './chatHeader.scss'

import {chathoc} from "../../../HOC/chathoc";

const ChatHeader = (props) => {

    const [showDeleteDropDown, setShowDeleteDropDown] = useState(false);

    const {username = ''} = props.value.user;
    const {id} = props.value.match.params;

    const activeChat = props.value.chats2.all.find((chat) => {
        return chat._id === id
    });

    const {deleteChat} = props.value;

    return(
        <header className='chat-header'>
            <div className="active-chat">
                <h4 className="active-chat-title">
                    {activeChat !== undefined ? activeChat.title : "React chat"}
                </h4>
                <div className="drop-down-btn" onClick={() => setShowDeleteDropDown(!showDeleteDropDown)}>
                    <img src={menu} alt="menu"/>

                    <div className={`delete-chat-btn ${showDeleteDropDown ? "active" : ''}`} onClick={() => deleteChat(id)}>Delete Chat</div>
                </div>
            </div>

            <div className="user-info-and-logout">
                <div className="user-info">
                    <img src={userIcon} alt="user icon" className="user-icon"/>
                    <h4 className="user-name">{username}</h4>
                </div>
                <div className="logout" onClick={props.value.logout}>
                    <img src={logout} alt="logout" className="logout-icon"/>
                </div>
            </div>
        </header>
    )
}

export default chathoc(ChatHeader)
