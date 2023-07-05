import s from './../Messages.module.css';

const Message = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}

export default Message;