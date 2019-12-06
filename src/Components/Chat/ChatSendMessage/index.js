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
        const {isChatMember} = this.props.value.activeUser;
        const {joinChat} = this.props.value;
        const {content} = this.state;


        const chatId = this.props.value.match.params.id;
        return(
            <div className="chat-send-message">
            {
                isChatMember ?
                    <form className="send-message-content">
                        <textarea
                            className="chat-send-message-textarea"
                            placeholder="Type tour message..."
                            onChange={this.handleChangeContent}
                            value={content}
                        />

                        <div className="chat-send-message-btn" onClick={this.handleSendMessage}>
                            <img src={sendIcon} alt="send-icon" className="chat-send-message-btn-icon"/>
                        </div>
                    </form> :
                    <div className="join-chat" onClick={() => joinChat(chatId)}>Join chat</div>
            }
            </div>

        )
    }
}

export default chathoc(ChatSendMessage)