import React, {Component} from 'react'

import './chatMessages.scss'
import {chathoc} from "../../../HOC/chathoc";

class ChatMessages extends Component{

    constructor(){
        super();
        this.messages = React.createRef();
    }


    componentDidMount() {
        const {id = ""} = this.props.value.match.params;
        this.props.value.setActiveChat(id);

        if(id){
            this.messages.current.scrollTop = this.messages.current.firstChild.clientHeight
        }

    }

    componentDidUpdate(prevProps) {
        const {id = ""} = this.props.value.match.params;
        if(prevProps.value.match.params !== this.props.value.match.params){
            this.props.value.setActiveChat(id)
        }

        if(id){
            this.messages.current.scrollTop = this.messages.current.firstChild.clientHeight
        }

    }

    render(){

        console.log(this.props)

        const {messages} = this.props.value;
        const userId = this.props.value.user._id;
        const {id = ""} = this.props.value.match.params;


        return(
            <div className="chat-messages">
                {
                    id
                        ? <div className="chat-messages-wrapper" ref={this.messages}>
                            {messages.length !== 0
                                ? <ul className="chat-messages-wrapper-content" >

                                    {
                                        messages.map((message) => (
                                            <li className={`chat-messages-wrapper-content-item ${message.sender._id === userId ? "me" : ""}`}
                                                key={message._id}>
                                                <div className="chat-messages-wrapper-content-item-wrapper">{message.content}</div>
                                            </li>
                                        ))

                                    }

                                </ul>
                                : <h1>Not messages</h1>
                            }
                        </div>
                        : <h1 className="not-active-chat">Please start chat</h1>
                }

            </div>
        )
    }
}

export default chathoc(ChatMessages)