import React from 'react'
import {ChatConsumer} from "../utils/chatContext";

export const chathoc = (Component) => (props) => {
    return (
        <ChatConsumer>
            {
                (value) => {
                    return <Component {...props} value={value}/>
                }
            }
        </ChatConsumer>
    )
};