import React, {Component} from 'react'

import sendIcon from '../../../assets/img/send.svg'

import './chat-send-message.scss'
import {chathoc} from "../../../HOC/chathoc";

 class ChatSendMessage extends Component{
    state = {
        content: '',
    };

    handleChangeContent = (e) => {
        this.setState({content: e.target.value})
    };

    handleSendMessage = (content) => {
        const {id = ""} = this.props.value[0].match.params;
        const {sendMessage} = this.props.value[0];
        if(content.trim() !== ""){
            sendMessage(id, content);
            this.setState({
                content: "",
            })
        }
    };

    render(){


        const {content} = this.state;
        return(
            <form className="chat-send-message" onSubmit={(e) => {e.preventDefault(); this.handleSendMessage(content)}}>
                <textarea
                    className="chat-send-message-textarea"
                    placeholder="Type tour message..."
                    onChange={(e) => {this.handleChangeContent(e)}}
                    value={content}
                />

                <div className="chat-send-message-btn" onClick={() => {this.handleSendMessage(content)}}>
                    <img src={sendIcon} alt="send-icon" className="chat-send-message-btn-icon"/>
                </div>
            </form>
        )
    }
}

export default chathoc(ChatSendMessage)