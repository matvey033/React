import React from 'react';
import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {

    let dialogsEls = props.state.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messageEls = props.state.messageData.map(message => <Message message={message.message} answer={message.answer} img={message.img} />)

    let newMessage = React.createRef();

    let newMessageEl = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsEls}
            </div>
            <div className={s.message}>
                {messageEls}
                <textarea ref={newMessage}></textarea>
                <div>
                    <button onClick={newMessageEl}>AddMessage</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;