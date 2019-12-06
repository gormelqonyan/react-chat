import React, {useState} from "react";



import "./createChatPopup.scss"
import {chathoc} from "../../../../HOC/chathoc";

const CreateChatPopup = (props) => {

    const {onClose = () => {}} = props;
    const [newChatTitle, setNewChatTitle] = useState("");

    const handleCreateChatItem = () => {
        onClose();
        props.value.setNewChat(newChatTitle);
    };

    return(
        <div className="create-chat-popup">
            <div className="create-chat-popup-content">
                <h4 className="create-chat-popup-content-title">New chat</h4>

                <input
                    type="text"
                    className="create-chat-popup-content-input"
                    placeholder="Chat title..."
                    onChange={(e) => setNewChatTitle(e.target.value)}
                />

                <div className="create-chat-popup-content-btn">
                    <button className="create-chat-popup-content-add" onClick={handleCreateChatItem}>Create</button>
                    <button className="create-chat-popup-content-cancel" onClick={onClose}>cancel</button>
                </div>
            </div>
        </div>
    )
};

export default chathoc(CreateChatPopup);
