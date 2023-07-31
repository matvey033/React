import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {
    let dialogsEls = props.messagesPage.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messageEls = props.messagesPage.messageData
        .map(message => <Message message={message.message} answer={message.answer} img={message.img} />)

    let onAddNewMessage = () => {
        props.addNewMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsEls}
            </div>
            <div className={s.message}>
                {messageEls}
                <textarea onChange={onMessageChange} value={props.newMessageBody} />
                <div>
                    <button onClick={onAddNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;