import s from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = (props) => {

    let dialogsEls = props.dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messageEls = props.messageData.map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsEls}
            </div>
            <div className={s.message}>
                {messageEls}
            </div>
        </div>
    );
}

export default Messages;