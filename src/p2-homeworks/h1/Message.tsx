import React from "react";
import classes from "./Message.module.css"


type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<MessageType> = ({avatar, name, message, time})=> {
    return (
        <div className={classes.post}>
            <img src={avatar} alt="avatar"/>
            <div className={classes.message}>
                <div className={classes.name}>{name}</div>
                <div className={classes.text}>{message}</div>
                <div className={classes.time}>{time}</div>
            </div>


        </div>
    );
}

export default Message;
