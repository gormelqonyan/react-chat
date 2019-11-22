import React from 'react'
import Avatar from "../../../Avatar";

import './chatItem.scss'

const ChatItem = (props) => {
    return(
        <div className="chat-item">
            <Avatar title={props.title}/>
            <span className="chat-item-title">{props.title}</span>
        </div>
    )
}

export default ChatItem