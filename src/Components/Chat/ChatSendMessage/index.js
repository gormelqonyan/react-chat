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

    handleSendMessage = e => {
        console.log("event", e.target)
        const {content} = this.state;
        const {id = ""} = this.props.value.match.params;
        const {sendMessage} = this.props.value;
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
            <form className="chat-send-message">
                <textarea
                    className="chat-send-message-textarea"
                    placeholder="Type tour message..."
                    onChange={this.handleChangeContent}
                    value={content}
                />

                <div className="chat-send-message-btn" onClick={this.handleSendMessage}>
                    <img src={sendIcon} alt="send-icon" className="chat-send-message-btn-icon"/>
                </div>
            </form>
        )
    }
}

export default chathoc(ChatSendMessage)