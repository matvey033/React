import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addNewMessageActionCreator, onMessageElChangeActionCreator } from '../../redux/state';

const Messages = (props) => {

    let dialogsEls = props.messagesPage.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messageEls = props.messagesPage.messageData
        .map(message => <Message message={message.message} answer={message.answer} img={message.img} />)

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(onMessageElChangeActionCreator(body));
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
                    <button onClick={addNewMessage}>AddMessage</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;