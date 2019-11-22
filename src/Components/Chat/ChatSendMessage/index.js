import React, {Component} from 'react'

import sendIcon from '../../../assets/img/send.svg'

import './chat-send-message.scss'

export default class ChatSendMessage extends Component{
    render(){
        return(
            <div className="chat-send-message">
                <textarea className="chat-send-message-textarea" placeholder="Type tour message..."></textarea>
                <div className="chat-send-message-btn">
                    <img src={sendIcon} alt="send-icon" className="chat-send-message-btn-icon"/>
                </div>
            </div>
        )
    }
}