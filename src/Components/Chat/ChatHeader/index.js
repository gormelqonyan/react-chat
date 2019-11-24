import React from 'react'
import userIcon from '../../../assets/img/user.svg'
import logout from '../../../assets/img/logout.svg'

import './chatHeader.scss'

import {chathoc} from "../../../HOC/chathoc";

const ChatHeader = (props) => {

    console.log(props.value[1])

    const {username = ''} = props.value[1].user;

    return(
        <header className='chat-header'>
            <div className="active-chat">
                <h4 className="active-chat-title">
                    React js
                </h4>
            </div>

            <div className="user-info-and-logout">
                <div className="user-info">
                    <img src={userIcon} alt="user icon" className="user-icon"/>
                    <h4 className="user-name">{username}</h4>
                </div>
                <div className="logout" onClick={props.value[0].logout}>
                    <img src={logout} alt="logout" className="logout-icon"/>
                </div>
            </div>
        </header>
    )
}

export default chathoc(ChatHeader)
