import React from 'react'

import './avatar.scss'

const Avatar = (props) => {
    return(
        <div className="avatar">
            <span className="avatar-title">
                {props.title.slice(0, 2)}
            </span>
        </div>
    )
}

export default Avatar