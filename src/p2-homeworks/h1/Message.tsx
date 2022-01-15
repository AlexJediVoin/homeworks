import React from 'react'
import MessageCss from './Message.module.css'
type PropsTypeMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string
};
function Message (props: PropsTypeMessage) {
    return (
        <div className={MessageCss.post}>
            <div className={MessageCss.block_1}>
                <img className={MessageCss.avatar} src={props.avatar} alt="тут картинка"/>
            </div>
            <div className={MessageCss.block_2}>
                <div className={MessageCss.wrap}>
                    <div className={MessageCss.name}>
                        {props.name}
                    </div>
                    <div className={MessageCss.message}>
                        {props.message}
                    </div>
                    <div className={MessageCss.date}>
                        {props.time}
                    </div>
                    <div className={MessageCss.triangle}/>
                </div>
            </div>
        </div>
    )
}

export default Message
